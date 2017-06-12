const source = (state = "", action) => {
  switch (action.type) {
    case 'SOURCE_CHANGE':
      state = action.source;
      return state;
    case 'SOURCE_GET':
      return state;
    default:
      return state
  }
}

export default source