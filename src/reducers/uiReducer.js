import { TOGGLE_DRAWER } from '../constants/actionTypes'
import initialState from './initialState'

export const drawer = (state = initialState.ui, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {...state, drawer: !state.drawer}
        default:
            return state
    }
}
