import { combineReducers } from "redux"
import { drawer, toolbar } from "./uiReducer"

const rootReducer = combineReducers({
    drawer,
    toolbar
})

export default rootReducer
