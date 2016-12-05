import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import actions from './actions'
import Grid from './screens/grid'
import { play } from './sound'

import type { Animal } from '../reducers/navigation';

class App extends Component {

  componentWillUpdate(nextProps) {
    if (nextProps.selected) {
      play(nextProps.selected.sound);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid
          animals={this.props.animals}
          onSelect={this.props.selectAnimal}
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