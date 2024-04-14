// RecordScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import * as Speech from 'expo-speech';
import * as SpeechToText from 'expo-speech-to-text';


export default function RecordScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  const startRecording = async () => {
    setIsRecording(true);
    try {
      await SpeechToText.initializeAsync();
      await SpeechToText.startListeningAsync(result => {
        if (result.isFinal) {
          setRecognizedText(result.transcription);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    await SpeechToText.stopListeningAsync();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          title={isRecording ? 'Stop Recording' : 'Start Recording'}
          onPress={isRecording ? stopRecording : startRecording}
        />
      </View>
      {recognizedText ? (
        <View style={styles.recognizedTextContainer}>
          <Text>Recognized Text:</Text>
          <Text>{recognizedText}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  recognizedTextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
