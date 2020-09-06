import React, { useEffect } from  'react'

import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../main/reducers'
import {bindActionCreators, Dispatch} from 'redux'

import {getList , showDelete, showUpdate} from './billingCycleActions'


type BillingCycleListList = {
    list : []
}
type PropsFromRedux = ConnectedProps<typeof connector>

type BillingCycleListProps = PropsFromRedux & BillingCycleListList

const BillingCycleList: React.FC<BillingCycleListProps>  = (props)=>{

    useEffect(()=>{
        props.getList()
    },[])

    const renderRows =() => {
        const list = props.list || []
        return list.map((bc:any) => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }


    return(
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Mês</th>
                    <th>Ano</th>
                    <th className='table-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    </div>
    )
} 

const mapStateToProps =( state: RootState )=> ({list: state.billingCycle.list})
const mapDispatchToProps =( dispatch: Dispatch) => bindActionCreators({getList,showDelete, showUpdate }, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(BillingCycleList)