import React, { useEffect } from  'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../main/reducers'
import {bindActionCreators} from 'redux'

import {getSummary} from './dashboardActions';

type PropsFromRedux = ConnectedProps<typeof connector>

type dashboardProps = PropsFromRedux & {}

const Dashboard: React.FC<dashboardProps> = (props) =>{

    console.log('porps: ' , props)

    const getSummaryF = props.getSummary;

    useEffect(()=>{
        getSummaryF();
    },[getSummaryF])

    return(
        <div>
            <ContentHeader title='Dashboar' small='versão 1.0'   />
            <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${props.summary.credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${props.summary.debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${props.summary.credit - props.summary.debt}`} text='Valor Consolidado' />
                    </Row> 
            </Content>
        </div>
    )
}

const mapStateToProps = (state:RootState) => {
    console.log(state);
   return (
    {summary: state.dashboard.summary} 
    
    )}

const mapDispatchToProps = (dispatch : any) => bindActionCreators({getSummary}, dispatch)    

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Dashboard);


