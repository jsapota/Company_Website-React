import { combineReducers } from 'redux'
import source from './source'
import data from './data'
import updateSnippet from './updateSnippet'

const reducers = combineReducers({
  source,
  data,
  updateSnippet
})

export default reducers