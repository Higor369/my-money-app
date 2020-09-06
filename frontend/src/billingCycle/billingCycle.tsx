import React, { useEffect } from  'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'

import {connect, ConnectedProps} from 'react-redux'
import rootReducers, { RootState } from '../main/reducers'
import {bindActionCreators, Dispatch} from 'redux'
import {selectTab} from '../common/tab/tabActions'

type PropsFromRedux = ConnectedProps<typeof connector>

type dashboardProps = PropsFromRedux & {}

const BillingCycle: React.FC<dashboardProps> = (props) =>{

    useEffect(()=>{ 
        props.selectTab('tabList');
    },[])

    return(  <div> 
    <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
    <Content> 
        <Tabs> 
            <TabsHeader> 
                <TabHeader label='Listar' icon='bars' target='tabList' />
                <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader> 
            <TabsContent> 
                <TabContent id='tabList' >
                    <List />
                </TabContent>
                <TabContent id='tabCreate'>
                    <Form onSubmit={props.create}
                        submitLabel='Incluir' submitClass='primary' />
                </TabContent>
                <TabContent id='tabUpdate'>
                    <Form onSubmit={props.update}
                        submitLabel='Alterar' submitClass='info' />
                </TabContent>
                <TabContent id='tabDelete'>
                    <Form onSubmit={props.remove} readOnly={true}
                        submitLabel='Excluir' submitClass='danger' />
                </TabContent>
            </TabsContent> 
        </Tabs> 
    </Content> 
</div> 
)
}


const mapStateToProps =( state: RootState )=> ({list: state.billingCycle.list})

const mapDispatchToProps = (dispath: Dispatch) =>{
  return  bindActionCreators({selectTab, update, create,remove},dispath)
}

const connector = connect(mapStateToProps,mapDispatchToProps);

export default connector(BillingCycle) 