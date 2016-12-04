import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {this.props.animals[0]}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const stateToProps = (state) => ({
  selected: state.navigation.animalSelected,
  animals: state.navigation.animals,
});

const dispatchToProps = (dispatch) => ({
  selectAnimal: (animal) => dispatch(actions.navigation.selectAnimal(animal)),
});

export default connect(stateToProps, dispatchToProps)(App);