import { Count_REQ, Count_REQ_FAIL, Count_REQ_SUC, POST_REQ, POST_REQ_FAIL, POST_REQ_SUC, REQ, REQ_FAIL, REQ_SUC } from "./actiontype"

export const Req = () => {
    return { type: REQ }
}

export const Reqsuc = (payload) => {
    return { type: REQ_SUC, payload: payload }
}

export const Reqfail = () => {
    return { type: REQ_FAIL }
}

export const PostReq = () => {
    return { type: POST_REQ }
}

export const PostReqsuc = (payload) => {
    return { type: POST_REQ_SUC, payload: payload }
}

export const PostReqfail = () => {
    return { type: POST_REQ_FAIL }
}

export const CountReq = () => {
    return { type: Count_REQ }
}

export const CountReqsuc = (payload) => {
    return { type: Count_REQ_SUC, payload: payload }
}

export const CountReqfail = () => {
    return { type: Count_REQ_FAIL }
}