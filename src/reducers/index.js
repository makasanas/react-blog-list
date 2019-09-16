import { combineReducers } from "redux"
import listStyle from './listStyleReducer'
import articleList from './articleListReducer'

export default combineReducers({
    listStyle,
    articleList
})