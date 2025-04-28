import React from 'react'
import { Count_REQ, Count_REQ_SUC, POST_REQ, POST_REQ_FAIL, POST_REQ_SUC, REQ, REQ_FAIL, REQ_SUC } from './actiontype'
const IntailState = {
    data: [],
    loading: false,
    error: false,
    count : 0
}

function reducer(state = IntailState, { type, payload }) {
    switch (type) {

        case Count_REQ:
            return {
                ...state,
                loading: true
            };
        
            case Count_REQ_SUC:
                return {
                    ...state,
                    loading: true,
                    count :  state.count + payload
                };

        case REQ:
            return {
                ...state,
                loading: true
            };
        case REQ_SUC:
            return {
                ...state,
                loading: false,
                data: payload
            };
        case REQ_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };

        case POST_REQ:
            return {
                ...state,
                loading: true
            };
        case POST_REQ_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case POST_REQ_SUC:
            return {
                ...state,
                loading: false,
                data: [...state.data, payload] // ✅ append new data to array
            };

        default:
            return state;
    }
}


export default reducer