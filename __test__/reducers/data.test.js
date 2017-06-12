import data from '../../src/reducers/data'

describe('Request Data-reducer', () => {
  it(' default state', () => {
    expect(data([], { type: 'unexpected' } )).toEqual([]);
  });
});