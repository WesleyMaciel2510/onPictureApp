import java.io.FileNotFoundException
import java.util.Properties

plugins {
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsKotlinAndroid)
}

android {
    namespace = "com.example.onpictureapp"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.onpictureapp"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        val keysProperties = Properties().apply {
            val keysFile = rootProject.file("keys/keys.properties")  // Corrected path
            if (keysFile.exists()) {
                load(keysFile.inputStream())
            } else {
                throw FileNotFoundException("keys.properties file not found in the keys directory")
            }
        }
        buildConfigField(
            "String",
            "PEXELS_API_KEY",
            keysProperties.getProperty("PEXELS_API_KEY", "\"\"")
        )
        buildTypes {
            release {
                isMinifyEnabled = false
                proguardFiles(
                    getDefaultProguardFile("proguard-android-optimize.txt"),
                    "proguard-rules.pro"
                )
            }
        }
        compileOptions {
            sourceCompatibility = JavaVersion.VERSION_1_8
            targetCompatibility = JavaVersion.VERSION_1_8
        }
        kotlinOptions {
            jvmTarget = "1.8"
        }
        buildFeatures {
            viewBinding = true
            buildConfig = true
        }
    }

    dependencies {

        implementation(libs.androidx.core.ktx)
        implementation(libs.androidx.appcompat)
        implementation(libs.material)
        implementation(libs.androidx.constraintlayout)
        implementation(libs.androidx.lifecycle.livedata.ktx)
        implementation(libs.androidx.lifecycle.viewmodel.ktx)
        implementation(libs.androidx.navigation.fragment.ktx)
        implementation(libs.androidx.navigation.ui.ktx)
        testImplementation(libs.junit)
        androidTestImplementation(libs.androidx.junit)
        androidTestImplementation(libs.androidx.espresso.core)
        // libs added
        implementation("com.squareup.okhttp3:okhttp:4.12.0")
        implementation("io.coil-kt:coil:2.6.0")
        implementation("com.google.code.gson:gson:2.9.1")
    }
}