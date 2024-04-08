import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, SafeAreaView, TextInput, Text,ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons'; // Importing icons from react-native-vector-icons
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreenImage from '../assets/NewsSplashScreen.jpg'

export default function OCRScreen() {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const pickImageGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      allowsMultipleSelection: false,
    });
    if (!result.cancelled) {
      performOCR(result.assets[0]);
      setImage(result.assets[0].uri);
    }
  };

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      allowsMultipleSelection: false,
    });
    if (!result.cancelled) {
      performOCR(result.assets[0]);
      setImage(result.assets[0].uri);
    }
  };

  const downloadAsPdf = async () => {
    try {
      const { uri } = await Print.printToFileAsync({
        html: `<html><body><pre>${extractedText}</pre></body></html>`,
      });
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error printing:', error);
    }
  };

  const performOCR = (file) => {
    let myHeaders = new Headers();
    myHeaders.append(
      "apikey", "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"
    );
    myHeaders.append(
      "Content-Type",
      "multipart/form-data"
    );

    let raw = file;
    let requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      "https://api.apilayer.com/image_to_text/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setExtractedText(result["all_text"]);
      })
      .catch((error) => console.log("error", error));
  };

  return (
	
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.card}>
        <Text style={styles.heading2}>Image to Text App</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={pickImageGallery} style={styles.icon}>
            <FontAwesome5 name="images" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImageCamera} style={styles.icon}>
            <FontAwesome5 name="camera" size={30} color="black" />
          </TouchableOpacity>
        </View>
		<TouchableOpacity onPress={downloadAsPdf} style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download as PDF</Text>
          </TouchableOpacity>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <ScrollView style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Extracted text will appear here"
            value={extractedText}
            onChangeText={(text) => setExtractedText(text)}
          />
          
        </ScrollView>
		
      </ScrollView>
    </SafeAreaView>
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
	marginTop:70,
  },
  heading2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 10,
  },
  textInput: {
    fontSize: 16,
    textAlignVertical: 'top',
  },
  downloadButton: {
    backgroundColor: '#E30AB8',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
