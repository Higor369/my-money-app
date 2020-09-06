import {toastr} from 'react-redux-toastr';
import axios from  'axios'
import {reset, initialize} from 'redux-form'
import {selectTab,showTabs} from '../common/tab/tabActions'
import { Dispatch } from 'react';
const BASE_URL = 'http://localhost:3003/api';

const INITIAL_VALUES = {credits: [{}], debts: [{}]}
export function getList(){  
        const request = axios.get(`${BASE_URL}/billingCycles`)
        return {
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
        }

}

export function create(valuesany){ //redus

    return (dispatch  )=>{

        axios.post(`${BASE_URL}/billingCycles`)
            .then(rep=>{
                toastr.success('sucesso', 'operação realizada com sucesso')
                dispatch(reset('billingCycleForm'));
                dispatch(getList());
                dispatch(selectTab('tabList'));
                dispatch(showTabs('tabList', 'tabCreate'));
                
            }).catch((err  ) =>{
                err.response.data.erros.forEach((error) => toastr.error('Error', error));
            })
    }
   
}

export function showUpdate(billingCycle) {

    return (dispatch  ) =>{
        dispatch(showTabs('tabUpdate'))
        dispatch(selectTab('tabUpdate'))
        dispatch(initialize('billingCycleForm', billingCycle));
    }    
    
}

function submit(values, method) {
    return (dispatch  ) => {
        const id = values._id ? values._id : ''

        axios[method](`${BASE_URL}/billingCycles/${id}`, values) 
            .then((resp  )=> {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch((e) => {
                e.response.data.errors.forEach((error ) => toastr.error('Erro', error))
            })
    }
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function showDelete(billingCycle ) {
    return (dispatch ) =>{
        dispatch(showTabs('tabDelete'))
        dispatch(selectTab('tabDelete'))
        dispatch(initialize('billingCycleForm', billingCycle))

    }
    
}

export function init() {
    return (dispatch ) =>{

        dispatch( showTabs('tabList', 'tabCreate'))
        dispatch(selectTab('tabList'))
        dispatch(getList())
        dispatch(initialize('billingCycleForm', INITIAL_VALUES))
    } 
    
}