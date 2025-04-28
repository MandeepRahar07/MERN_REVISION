import { LP_REQ, LP_REQ_FAIL, LP_REQ_SUC } from './actiontype';

const initialState = {
    data: [],
    loading: false
};

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LP_REQ:
            return {
                ...state,
                loading: true
            };

        case LP_REQ_SUC:
            return {
                ...state,
                loading: false,
                data: payload
            };

        case LP_REQ_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}

export default reducer;
