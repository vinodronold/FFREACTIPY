import { TOGGLE_DRAWER } from '../constants/ui'
import initialState from './initialState'

export const drawer = (state = initialState.drawer, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return !state
        default:
            return state
    }
}