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
      sound: 'tortuga.mp3',
    },
    {
      name: 'lleo',
      image: require('../../images/lleo.jpg'),
      sound: 'lleo.mp3',
    },
    {
      name: 'marieta',
      image: require('../../images/marieta.jpg'),
      sound: 'marieta.mp3',
    },
    {
      name: 'cargol',
      image: require('../../images/cargol.jpg'),
      sound: 'cargol.mp3',
    },
    {
      name: 'lluna',
      image: require('../../images/lluna.jpg'),
      sound: 'lluna.mp3',
    },
    {
      name: 'cotxe',
      image: require('../../images/cotxe.jpg'),
      sound: 'cotxe.mp3',
    },
    {
      name: 'esquirol',
      image: require('../../images/esquirol.jpg'),
      sound: 'esquirol.mp3',
    },
    {
      name: 'elefant',
      image: require('../../images/elefant.jpg'),
      sound: 'elefant.mp3',
    },
    {
      name: 'escarbat',
      image: require('../../images/escarbat.png'),
      sound: 'escarbat.mp3',
    },
    {
      name: 'sol',
      image: require('../../images/sol.jpg'),
      sound: 'sol.mp3',
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