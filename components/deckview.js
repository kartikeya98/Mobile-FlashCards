import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { white, purple } from '../utils/colors';

addCard = () => {};
class DeckView extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={{ fontSize: 40 }}> {deck.title}</Text>
          <Text style={{ fontSize: 20 }}>{deck.questions.length ? deck.questions.length : 0} Cards</Text>
        </View>

        <TouchableOpacity
          style={
            Platform.OS === 'ios'
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={() =>
            this.props.navigation.navigate('NewCard', { deck: deck })
          }>
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            Platform.OS === 'ios'
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={() =>
            this.props.navigation.navigate('QuizDeck', { deck: deck })
          }>
          <Text style={styles.submitBtnText}>Quiz Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },

  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deck: {
    flex: 1,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DeckView;