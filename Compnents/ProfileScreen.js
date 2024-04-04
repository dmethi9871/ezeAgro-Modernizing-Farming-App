import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <TouchableOpacity style={styles.option}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Change Password</Text>
          </TouchableOpacity>
          {/* Add more profile options as needed */}
        </View>

        {/* Mode Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mode</Text>
          <TouchableOpacity style={styles.option}>
            <Text>Dark Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Light Mode</Text>
          </TouchableOpacity>
          {/* Add more mode options as needed */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
