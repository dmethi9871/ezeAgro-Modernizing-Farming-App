import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      
      {/* Card 1 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Mission</Text>
        <Text style={styles.cardText}>
          To deliver unique and engaging mobile experiences.
        </Text>
      </View>
      
      {/* Card 2 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Vision</Text>
        <Text style={styles.cardText}>
          To be recognized as innovators in mobile app development.
        </Text>
      </View>
      
      {/* Card 3 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact Us</Text>
        <Text style={styles.cardText}>
          Reach out via email: contact@example.com
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
});

export default About;