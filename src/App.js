import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import actions from './actions'
import Grid from './screens/grid'
import { play } from './sound'

import type { Animal } from '../reducers/navigation';

class App extends Component {

  selectAnimal(animal) {
    play(animal.sound);
    this.props.selectAnimal(animal);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#6b8551'
        />
        <Grid
          animals={this.props.animals}
          onSelect={(animal) => this.selectAnimal(animal)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  }
});

const stateToProps = (state) => ({
  selected: state.navigation.animalSelected,
  animals: state.navigation.animals,
});

const dispatchToProps = (dispatch) => ({
  selectAnimal: (animal: Animal) => dispatch(actions.navigation.selectAnimal(animal)),
});

export default connect(stateToProps, dispatchToProps)(App);