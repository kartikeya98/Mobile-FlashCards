import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import {createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation'
import {FontAwesome , Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'

import DeckList from './components/decklist'
import NewDeck from './components/newdeck'
import {purple, white} from './utils/colors'




function UdaciStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
  )
}

const Tabs = Platform.OS === 'ios' ? createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={TintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
},{

  navigationOptions: {
    header: null,
  },

tabBarOptions: {
  activeTintColor: Platform.OS === 'ios' ? purple : white,
  style: {
    height: 56,
    backgroundColor: Platform.OS === 'ios' ? white : purple,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  }
}

}) :

createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DeckList',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={TintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
},{

  navigationOptions: {
    header: null,
  },

tabBarOptions: {
 activeTintColor: Platform.OS === 'ios' ? purple : white,
  style: {
    height: 56,
    backgroundColor: Platform.OS === 'ios' ? white : purple,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  }
}

})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
    header: null,
    }
  }
})

export default class App extends React.Component {
  render() {

    
    return (
 

      <View style={{flex: 1}}>
    
        <View / >
         <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
        <MainNavigator />
        
      </View>
  
    );
  }
}


