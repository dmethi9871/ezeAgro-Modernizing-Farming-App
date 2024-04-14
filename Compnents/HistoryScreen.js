// HistoryScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';

export default function HistoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState([]); // Array to store history items

  const handleSearch = () => {
    // Implement search functionality here
    // Filter history based on searchQuery
    // Update history state with filtered results
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search History"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  historyItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});
