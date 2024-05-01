package com.example.onpictureapp.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import com.example.onpictureapp.databinding.FragmentHomeBinding

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val homeViewModel =
            ViewModelProvider(this).get(HomeViewModel::class.java)

        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        val root: View = binding.root
        return root
    }
    // Find the button by its ID
    //val buttonRequest = view.findViewById<Button>(R.id.buttonRequest)
    // Set an OnClickListener for the button
    //buttonRequest.setOnClickListener {
    //Log.d("HomeFragment", "Request button clicked!")
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}