import SnippetCodeSource from '../../snippetComponents/SnippetCodeSource/SnippetCodeSource'
import { connect } from 'react-redux'
import {changeSource, updateSheetData, updateSnippet } from '../../../actions/index';
import * as readerTemplate from '../../../scripts/filereader.js';

const templatePath = (name) => {
  return './templates/' + name + '.html';
};
const generateHtml = (name) => {
  return readerTemplate.readTextFile(templatePath(name));
};

const mapStateToProps = (state, ownProps) => {
  return {
    initialHtml: generateHtml(ownProps.htmlTemplate),
    htmlTemplate: state.source,
    tableData: state.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSourceChange: (text) => {
      dispatch(changeSource(text))
    },
    getTable: () => {
      dispatch(updateSheetData())
    },
    updateSnippet: () => {
      dispatch(updateSnippet(window.store.getState().data, window.store.getState().source));
    }

  }
};

const SnippetCurrentCodeSource = connect(mapStateToProps, mapDispatchToProps)(SnippetCodeSource);

export default SnippetCurrentCodeSource