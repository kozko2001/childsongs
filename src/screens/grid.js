import React, { Component } from 'react';
import {
  View,
  ListView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import GridView from 'react-native-gridview';
import type { Animal } from '../reducers/navigation';

type Props = {
  animals: Animal[],
  onSelect: (animal) => void;
}

// TODO Create a image grid component that is useful!
// TODO REFACTOR THIS GRID!!!
export default class Grid extends Component {
  props: Props;

  renderImage(item:Animal) {
    return (
      <View style={{  justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {this.props.onSelect(item)}}>
          <Image
            source={item.image}
            resizeMode='contain'
            style={{height: 150, width: 150}}
          />
        </TouchableOpacity>
      </View>
    );

  }

  render() {
    return (
      <GridView
        data={this.props.animals}
        itemsPerRow={2}
        renderItem={(item) => this.renderImage(item)}
      />
    );
  }

}