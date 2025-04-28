import React from 'react'
import { RT, RTF, RTS } from './actiontype'
const IntialState = {
    count: 0,
    loading: false,
    error: false
}
function reducer(state = IntialState, { type, payload }) {
    switch (type) {
        case RT:
            return {
                ...state,
                loading: true
            }
        case RTS:
            return {
                ...state,
                loading: false,
                count: state.count + payload
            }
        case RTF:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state
    }

}

export default reducer;