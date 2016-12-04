import { SELECT_ANIMAL } from '../actions/navigation';

export type Animal = {
  name: string,
  image: any,
  sound: any,
}

type State = {
  animalSelected: ?Animal,
  animals: Animal[],
}

const initialState = {
  animalSelected: null,
  animals: [
    {
      name: 'tortuga',
      image: require('../../images/tortuga.jpg'),
      sound: '',
    },
    {
      name: 'lleo',
      image: require('../../images/lleo.jpg'),
      sound: '',
    },
    {
      name: 'marieta',
      image: require('../../images/marieta.jpg'),
      sound: '',
    },
    {
      name: 'cargol',
      image: require('../../images/cargol.jpg'),
      sound: '',
    },
  ]
};

export default function(state:State = initialState, action): State {
  switch (action.type) {
    case SELECT_ANIMAL:
      return {
        ...state,
        animalSelected: action.animal,
      };
    default:
      return state;
  }
}