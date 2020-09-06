const INITIAL_STATE = {list: []}

type BCReducer = {
    type: string;
    payload: any;
}


export default (state = INITIAL_STATE, action:BCReducer) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}