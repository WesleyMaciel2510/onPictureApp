package services

import android.util.Log
import okhttp3.OkHttpClient
import okhttp3.Request
import com.example.onpictureapp.BuildConfig

object ApiService {
    private val client = OkHttpClient()
    private val APIKEY = BuildConfig.PEXELS_API_KEY

    fun fetchPhotos(page: Int = 1, perPage: Int = 6): String? {
        Log.d("PexelsRequest", "API KEY Value: $APIKEY")
        val request = Request.Builder()
            .url("https://api.pexels.com/v1/curated?per_page=$perPage")
            .addHeader("Authorization", APIKEY)
            .build()

        client.newCall(request).execute().use { response ->
            return if (response.isSuccessful) {
                response.body?.string()
            } else {
                Log.d("PexelsRequest", "Failed to fetch: ${response.code}")
                null
            }
        }
    }
}
