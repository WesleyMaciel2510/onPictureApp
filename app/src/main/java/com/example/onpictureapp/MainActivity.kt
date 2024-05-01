package com.example.onpictureapp

import android.os.Bundle
import android.view.Menu
import com.google.android.material.navigation.NavigationView
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import androidx.drawerlayout.widget.DrawerLayout
import androidx.appcompat.app.AppCompatActivity
import android.util.Log
import android.widget.Button
import android.widget.ImageView
import coil.load
import com.example.onpictureapp.databinding.ActivityMainBinding
import org.json.JSONException
import org.json.JSONObject
import services.ApiService

class MainActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.appBarMain.toolbar)

        val buttonRequest = findViewById<Button>(R.id.buttonRequest)
        buttonRequest.setOnClickListener {
            // Log a message when the button is clicked
            //Log.d("MainActivity", "Request button clicked in Main!")
            Thread {
                val jsonData = ApiService.fetchPhotos(page = 1, perPage = 6)
                runOnUiThread {
                    if (jsonData != null) {
                        try {
                            val jsonObject = JSONObject(jsonData)
                            val photos = jsonObject.getJSONArray("photos")

                            val imageViews = listOf(
                                findViewById<ImageView>(R.id.imageView1),
                                findViewById<ImageView>(R.id.imageView2),
                                findViewById<ImageView>(R.id.imageView3),
                                findViewById<ImageView>(R.id.imageView4),
                                findViewById<ImageView>(R.id.imageView5),
                                findViewById<ImageView>(R.id.imageView6)
                            )

                            for (i in 0 until photos.length()) {
                                val photoObject = photos.getJSONObject(i)
                                val imageUrl = photoObject.getJSONObject("src").getString("portrait")
                                imageViews[i].load(imageUrl) {
                                    crossfade(true)
                                    placeholder(R.drawable.ic_menu_gallery)
                                    error(R.drawable.ic_launcher_foreground)
                                }
                            }
                        } catch (e: JSONException) {
                            Log.e("PexelsRequest", "JSON Parsing error: ${e.message}")
                        } catch (e: IndexOutOfBoundsException) {
                            Log.e("PexelsRequest", "Error: Not enough images returned from the API.")
                        }
                    } else {
                        Log.d("PexelsRequest", "Failed to fetch data")
                    }
                }
            }.start()


        }

        val drawerLayout: DrawerLayout = binding.drawerLayout
        val navView: NavigationView = binding.navView
        val navController = findNavController(R.id.nav_host_fragment_content_main)

        appBarConfiguration = AppBarConfiguration(
            setOf(
                R.id.nav_home, R.id.nav_gallery, R.id.nav_slideshow
            ), drawerLayout
        )
        setupActionBarWithNavController(navController, appBarConfiguration)
        navView.setupWithNavController(navController)
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.main, menu)
        return true
    }

    override fun onSupportNavigateUp(): Boolean {
        val navController = findNavController(R.id.nav_host_fragment_content_main)
        return navController.navigateUp(appBarConfiguration) || super.onSupportNavigateUp()
    }
}
