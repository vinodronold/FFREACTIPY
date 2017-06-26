import { combineReducers } from "redux"
import DrawerReducer from './DrawerReducer'
import MoreOptionsReducer from './MoreOptionsReducer'
import ToolbarReducer from './ToolbarReducer'
import ChordListReducer from './ChordListReducer'
import ChordsReducer from './ChordsReducer'
import PlayerReducer from './PlayerReducer'

const rootReducer = combineReducers({
    drawer: DrawerReducer,
    moreOptions: MoreOptionsReducer,
    toolbar: ToolbarReducer,
    chordlist: ChordListReducer,
    chords: ChordsReducer,
    player: PlayerReducer
})

export default rootReducer
