import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Dimensions, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon, Overlay } from 'react-native-elements';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const cardColors = ['#FFD700', '#FF6347', '#00CED1', '#FFA07A'];
  const [visible, setVisible] = React.useState(false);
  const [selectedQuestion, setSelectedQuestion] = React.useState('');
  const [selectedAnswer, setSelectedAnswer] = React.useState('');
  
  const toggleOverlay = () => {
    setVisible(!visible);
    setSelectedQuestion('');
    setSelectedAnswer('');
  };

  const selectQuestion = (question) => {
    setSelectedQuestion(question);
    const answer = prewrittenQuestions.find(item => item.question === question)?.answer;
    setSelectedAnswer(answer);
  };

  const LetterGenerator = () => {
    console.log('Card pressed!');
    navigation.navigate('LetterGenerator');
  };

  const ImageOCR = () => {
    console.log('Card pressed!');
    navigation.navigate('ImageOCr');
  };
  const TextToSpeech = () => {
    console.log('Card pressed!');
    navigation.navigate('TextToSpeech');
  };
  
  const prewrittenQuestions = [
    { question: 'How do I generate a letter?', answer: 'You can generate a letter by...' },
    { question: 'How does Text to Speech work?', answer: 'Text to Speech works by...' },
    // Add more prewritten questions and answers as needed
  ];

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={toggleOverlay} style={styles.customIconContainer}>
          <Image
            source={require('../assets/Chatbot.png')} 
            style={styles.customIcon} 
          />
       </TouchableOpacity>
      {/* Slider */}
      <View style={styles.sliderContainer}>
        <Swiper style={styles.swiper} autoplay>
          <View style={styles.slide}>
            <Image source={require('../assets/Register.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/Register.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/Register.png')} style={styles.image} />
          </View>
        </Swiper>
      </View>

      {/* Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={LetterGenerator} style={[styles.card, { backgroundColor: cardColors[0] }]}>
          <FontAwesome5 name="envelope" size={50} color="black" />
          <Text style={styles.title}>Letter Generator</Text>
          <Text style={styles.description}>Generate letters on the go!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={TextToSpeech} style={[styles.card, { backgroundColor: cardColors[1] }]}>
          <FontAwesome5 name="volume-up" size={50} color="black" />
          <Text style={styles.title}>Text to Speech</Text>
          <Text style={styles.description}>Listen to your text!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ImageOCR} style={[styles.card, { backgroundColor: cardColors[2] }]}>
          <FontAwesome5 name="camera" size={50} color="black" />
          <Text style={styles.title}>Image from Text</Text>
          <Text style={styles.description}>Extract text from images!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={TextToSpeech} style={[styles.card, { backgroundColor: cardColors[3] }]}>
          <FontAwesome5 name="microphone" size={50} color="black" />
          <Text style={styles.title}>Speech to Text</Text>
          <Text style={styles.description}>Convert your speech into text!</Text>
        </TouchableOpacity>
      </View>
       
      <Overlay 
        isVisible={visible} 
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}
        onBackdropPressIn={toggleOverlay}
      >
        <ScrollView contentContainerStyle={styles.chatbotContainer}>
          {selectedQuestion ? (
            <>
              <Text style={styles.questionText}>{selectedQuestion}</Text>
              <Text style={styles.answerText}>{selectedAnswer}</Text>
            </>
          ) : (
            <>
              <Text style={styles.chatbotTitle}>Creative Chatbot</Text>
              {prewrittenQuestions.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => selectQuestion(item.question)} style={styles.questionButton}>
                  <Text style={styles.questionText}>{item.question}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}
        </ScrollView>
      </Overlay>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 50 : 0,
    justifyContent: 'flex-start',
  },
  sliderContainer: {
    height: 200,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F0F0F0',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  card: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    width: screenWidth > 600 ? '30%' : '45%',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  swiper: {
    height: '100%',
  },
  slide: {
    justifyContent: 'center', // Default value for demonstration
    alignItems: 'center', // Default value for demonstration
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  chatIcon: {
    position: 'absolute',
    bottom: 20, 
    right: 20, 
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 5,
  },
  chatbotContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  chatbotTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionButton: {
    paddingVertical: 10,
  },
  overlay: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    elevation: 5,
  },
  answerText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  customIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999, // Make sure it's above other components
  },
  customIcon: {
    width: 150,
    height: 150,
  },
});
