
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function History({ route }) {
  const { calcHistory } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={calcHistory}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 20,
    marginVertical: 5,
  },
});
