import {} from 'redux'

type actionType = {
    type: string;
    payload: any;
}

export const INITIAL_STATE = {summary :{credit:0, debt: 0}};

export default function(state= INITIAL_STATE, action : actionType){

    switch (action.type){
        case 'BILLING_SUMMARY_FETCHED':

            console.log('para tudo é aqui ', action)
            return {...state, summary : action.payload.data }
         default:
             return state   
    }
}