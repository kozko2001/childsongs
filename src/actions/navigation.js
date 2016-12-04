export const SELECT_ANIMAL = 'SELECT_ANIMAL';

export function selectAnimal(animal: string) {
  return {
    type: SELECT_ANIMAL,
    animal,
  };
}