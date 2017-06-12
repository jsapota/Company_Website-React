import SnippetSpreadsheet from '../../snippetComponents/SnippetSpreadsheet/SnippetSpreadsheet'
import { connect } from 'react-redux'
import { initData ,updateSheetData, updateSnippet  } from '../../../actions/index';

const mapStateToProps = (state, ownProps) => {
  return {
    initialTableData: ownProps.tableData,
    tableData: state.data,
    source: state.source
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCellChange: () => {
      dispatch(updateSheetData())
    },
    initTableData: () =>{
      dispatch(initData(ownProps.tableData))
    },
    updateSnippet: () => {
      dispatch(updateSnippet(window.store.getState().data, window.store.getState().source));
    }
  }
}

const SnippetCurrentSpreadSheet = connect(mapStateToProps, mapDispatchToProps)(SnippetSpreadsheet);

export default SnippetCurrentSpreadSheet