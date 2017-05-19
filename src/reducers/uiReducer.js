import { TOGGLE_DRAWER } from '../constants/actionTypes'
import initialState from './initialState'

export const drawer = (state = initialState.drawer, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return Object.assign({}, state, {isOpen: !state.isOpen})
        default:
            return state
    }
}
