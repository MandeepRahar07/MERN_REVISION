
import { GET_REQ, GET_REQ_FAIL, GET_REQ_SUC } from './actiontype'

const IntailValue = {
    data: [],
    loading: false
}

function reducer(state = IntailValue, { type, payload }) {
    switch (type) {
        case GET_REQ:
            return {
                ...state,
                loading: true
            }

        case GET_REQ_SUC:
            return {
                ...state,
                data: payload,
                loading: false
            }

        case GET_REQ_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state;

    }


}

export default reducer