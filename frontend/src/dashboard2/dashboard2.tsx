import Axios from 'axios';
import React, { useEffect, useState } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'




type respSummaryRequest={
    debt: number;
    credit: number;
}


const Dashboard2: React.FC = () =>{

    const [debt, setDebt] = useState<number>(0);
    const [credit, setcredit] = useState<number>(0);

    useEffect(()=>{
        Axios.get('http://localhost:3003/api/billingCycle/summary')
            .then(resp =>{
               var summary = resp.data as respSummaryRequest
                
               setDebt(summary.debt);
               setcredit(summary.credit);
            })

    },[])

    return(
            <div>
                <ContentHeader title='Dashboar' small='versão 1.0'   />
                <Content>
                        <Row> 
                            <ValueBox cols='12 4' color='green' icon='bank'
                                value={`R$ ${credit}`} text='Total de Créditos' />
                            <ValueBox cols='12 4' color='red' icon='credit-card'
                                value={`R$ ${debt}`} text='Total de Débitos' />
                            <ValueBox cols='12 4' color='blue' icon='money'
                                value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                        </Row> 
                </Content>
            </div>
        
    )
}

export default Dashboard2;