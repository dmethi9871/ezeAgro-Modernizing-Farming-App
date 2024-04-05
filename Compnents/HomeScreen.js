import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import OCRScreen from './OCRScreen'; // Import OCRScreen
import LetterGenerator from './LetterGenerator';

function Card({ title, description, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) { // Pass navigation prop
  const handlePress = () => {
    console.log('Card pressed!');
    navigation.navigate('LetterGenerator');
  };

  const IMageOCr = () => {
    console.log('Card pressed!');
    navigation.navigate('ImageOCr'); // Navigate to 'OCRScreen'
  };
  const TextToSpecch = () => {
    console.log('Card pressed!');
    navigation.navigate('ImageOCr'); // Navigate to 'OCRScreen'
  };
  const SpeechtoText = () => {
    console.log('Card pressed!');
    navigation.navigate('ImageOCr'); // Navigate to 'OCRScreen'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home!</Text>
      <View style={styles.cardContainer}>
        <Card
          title="Card Title"
          description="This is a description of the card."
          onPress={handlePress}
        />
        <Card
          title="Another Card Title"
          description="This is another description of the card."
          onPress={handlePress}
        />
        <Card
          title="TextToImage"
          description="This is yet another description of the card."
          onPress={IMageOCr} // Call IMageOCr function
        />
        <Card
          title="Last Card Title"
          description="This is the last description of the card."
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    width: '45%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});
