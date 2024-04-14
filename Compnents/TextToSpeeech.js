import React, { useState } from 'react';
import { View, StyleSheet, TextInput , ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper'; // Importing Material UI buttons from react-native-paper
import { MaterialCommunityIcons} from '@expo/vector-icons'; // Importing Ionicons for creative icons
import * as Speech from 'expo-speech';



export default function TextToSpeech() {
    const [text, setText] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
  
    const speak = () => {
      if (text) {
        Speech.speak(text, {
          onDone: () => setIsSpeaking(false),
          onStart: () => setIsSpeaking(true),
        });
      }
    };
  
    const handlePause = () => {
      Speech.pause();
      setIsSpeaking(false);
    };
  
    const handleResume = () => {
      Speech.resume();
      setIsSpeaking(true);
    };
  
    return (
      <View style={styles.container} contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Type something to speak"
            value={text}
            onChangeText={setText}
          />
        </Card>
        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            onPress={speak}
            disabled={isSpeaking}
            style={styles.button}>
            <MaterialCommunityIcons name="volume-high" size={24} color="white" />
            <Text> Speak</Text>
          </Button>
          <Button
            mode="contained"
            onPress={handlePause}
            disabled={!isSpeaking}
            style={styles.button}>
            <MaterialCommunityIcons name="pause" size={24} color="white" />
            <Text> Pause</Text>
          </Button>
          <Button
            mode="contained"
            onPress={handleResume}
            disabled={!isSpeaking}
            style={styles.button}>
            <MaterialCommunityIcons name="play" size={24} color="white" />
            <Text> Resume</Text>
          </Button>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7D0E2',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '70%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 4,
        backgroundColor: '#F3EDF2',
        textAlign:'center'
    },
    input: {
        height: 60,
        marginVertical: 20,
        padding: 10,
        width: '90%',
        alignSelf: 'center', // Center the text input horizontally
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center', // Center buttons horizontally
    },
    button: {
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '80%', // Set button width to 80% of its container
    },
});