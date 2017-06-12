export const updateSheetData = () => {
  return {
    type: 'DATA_CHANGED'
  }
};

export const initData = (tableData) => {
  return {
    type: 'DATA_INIT',
    tableData: tableData
  }
};

export const changeSource = (source) => {
  return {
    type: "SOURCE_CHANGE",
    source: source
  }
};

export const updateSnippet =(tableData,source) => {
  return {
    type: "UPDATE_SNIPPET",
    tableData: tableData,
    source: source
  }
}
