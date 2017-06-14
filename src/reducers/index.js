import { combineReducers } from "redux"
import { drawer, moreOptions, toolbar } from "./uiReducer"

const rootReducer = combineReducers({
    drawer,
    moreOptions,
    toolbar
})

export default rootReducer
