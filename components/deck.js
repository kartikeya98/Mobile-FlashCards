import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Deck({deck} ) {
  const { title, questions } = deck;
  return (
    <View style={styles.deck}>
      <Text>{title}</Text>
      {/* <Text>{questions.length ? questions.length : 0} cards</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
});