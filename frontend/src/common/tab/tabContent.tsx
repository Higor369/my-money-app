import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../../main/reducers'
import If from '../operators/if'


type TabHeaderProps = {
    id: string;
    children: any;
}

type PropsFromRedux = ConnectedProps<typeof connector>

type geralProps = PropsFromRedux & TabHeaderProps

const TabContent: React.FC<geralProps> = (props) =>{

    const selected = props.tab.selected === props.id
    const visible = props.tab.visible[props.id] 

    return(
            <If test={visible}>
                <div id={props.id}
                    className={`tab-pane ${selected ? 'active' : ''}`}> 
                    {props.children}
                </div> 
            </If>
    )

}

const mapStateToProps = (state: RootState)=>{
    return({tab: state.tab})
}


const connector = connect(mapStateToProps)

export default connector(TabContent);