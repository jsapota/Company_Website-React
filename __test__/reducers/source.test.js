import source from '../../src/reducers/source'

describe('Request source-reducer', () => {
  it('default state', () => {
    expect(source("", { type: 'unexpected' } )).toEqual("");
  });
  it('change state', () => {
    expect(source(""
      , { type: 'SOURCE_CHANGE', source: "test" } )).toEqual("test");
  });
});