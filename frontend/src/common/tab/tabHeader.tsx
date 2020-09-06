import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import { RootState } from '../../main/reducers'
import {bindActionCreators} from 'redux'
import {selectTab} from './tabActions'
import If from '../operators/if'

type TabHeaderProps = {
    target: string;
    label: string;
    icon: string;
}

type PropsFromRedux = ConnectedProps<typeof connector>

type geralProps = PropsFromRedux & TabHeaderProps

const TabHeader: React.FC<geralProps> = (props) =>{

    const visible = props.tab.visible[props.target]

    const selectd: boolean = props.tab.selected === props.target
    return(
        <If test={visible}>
        <li className={ selectd ? 'active' : ''}> 
            <a href='javascript:;' 
                data-toggle='tab'
                onClick={() => props.selectTab(props.target)}
                data-target={props.target}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a> 
        </li> 
    </If>
    )

}

const mapStateToProps = (state: RootState)=>{
    return({tab: state.tab})
}
const mapDispatchToProps = (dispatch: any) =>{
   return bindActionCreators({selectTab},dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(TabHeader);