import updateIframes from './updateIframe'


const updateSnippet = (state = "", action) => {
  switch(action.type) {
    case 'UPDATE_SNIPPET':
      updateIframes(action.tableData, action.source);
      return state;
    default:
      return state;
  }
};

export default updateSnippet