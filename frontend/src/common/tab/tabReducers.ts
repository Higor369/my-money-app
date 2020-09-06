const INITIAL_STATE = { selected: '', visible: {} as any }

type tabReducer = {
    type: string;
    payload: string;
}

export default (state = INITIAL_STATE, action: tabReducer) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}