import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import * as SpeechRecognition from 'expo-speech-recognition';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you want to use FontAwesome icons

const Voice_to_Text = () => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [pastedText, setPastedText] = useState('');

  useEffect(() => {
    if (!isRecording) {
      handleStopRecording();
    }
  }, [isRecording]);

  const requestSpeechPermission = async () => {
    try {
      const { status } = await SpeechRecognition.requestPermissionsAsync();
      if (status === 'granted') {
        startRecording();
      } else {
        console.log('Permission to access speech recognition denied');
      }
    } catch (error) {
      console.error('Error requesting speech permission:', error);
    }
  };

  const startRecording = async () => {
    try {
      await SpeechRecognition.startListeningAsync({ language: 'en-IN' });
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start speech recognition', error);
    }
  };

  const handleStopRecording = async () => {
    try {
      const { transcription } = await SpeechRecognition.stopListeningAsync();
      setTranscript(transcription || '');
      setIsRecording(false);
    } catch (error) {
      console.error('Failed to stop speech recognition', error);
    }
  };

  const handlePasteText = () => {
    setTranscript(pastedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speech to Text Converter</Text>
      <Text style={styles.note}>Note: To paste text, type in the input field and click 'Paste'</Text>
      <TextInput
        style={styles.input}
        placeholder="Type or paste text here"
        multiline
        value={pastedText}
        onChangeText={setPastedText}
      />
      <TouchableOpacity onPress={requestSpeechPermission} disabled={isRecording}>
        <FontAwesome name="microphone" size={24} color="white" style={[styles.button, { backgroundColor: '#007bff' }]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStopRecording} disabled={!isRecording}>
        <FontAwesome name="stop" size={24} color="white" style={[styles.button, { backgroundColor: '#dc3545' }]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePasteText}>
        <Text style={[styles.button, { backgroundColor: '#28a745' }]}>Paste</Text>
      </TouchableOpacity>
      <View style={styles.transcriptContainer}>
        <Text style={styles.transcript}>{transcript}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  note: {
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    minHeight: 100,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  transcriptContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '100%',
  },
  transcript: {
    fontSize: 16,
  },
});

export default Voice_to_Text;
