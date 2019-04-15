global.window = global;
require('../src/data');
require('./data.spec.js');

describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof global.sortData).toBe('function');
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof global.filterData).toBe('function');
  });
});

describe('calculate', () => {
  it('debería ser una función', () => {
    expect(typeof global.calculate).toBe('function');
  });
});

const POKEMON = [{
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'egg': '2 km',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
},
{'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'egg': 'Not in Eggs',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
},
{'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'egg': 'Not in Eggs',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
},
{'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'egg': '2 km',
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
}];
const inputSort = [{
  'name': 'Bulbasaur'},
{'name': 'Ivysaur'},
{'name': 'Venusaur'},
{'name': 'Charmander', }];

const condition1 = 'AZ';
const condition2 = 'ZA';

const outputSortAZ = [{
  'name': 'Bulbasaur'},
{'name': 'Charmander'},
{'name': 'Ivysaur'},
{'name': 'Venusaur'}];
const outputSortZA = [{
  'name': 'Venusaur'},
{'name': 'Ivysaur'},
{'name': 'Charmander'},
{'name': 'Bulbasaur'}];

const conditionFilter = 'Fire';
const outputFilter = [{
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'egg': '2 km',
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
}];

describe('POKEMON', () => {
  it('deberia ser un array con objetos', () => {
    expect(Array.isArray(['POKEMON'])).toBe(true);
  });
});

describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('debería retornar un array de objetos ordenado por "name" de a-z', () => {
    expect(sortData(inputSort, condition1)).toEqual(outputSortAZ);
  });

  it('debería retornar un array de objetos ordenado por "name" de z-a', () => {
    expect(sortData(inputSort, condition2)).toEqual(outputSortZA);
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });

  it('debería retornar un array de objetos por "type" ', () => {
    expect(filterData(POKEMON, conditionFilter)).toEqual(outputFilter);
  });
});