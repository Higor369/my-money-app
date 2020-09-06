import React from  'react'
import {  Link } from 'react-router-dom'

interface MenuItemProps{
    icon:string;
    label:string;
    path: string;
}

const MenuItem : React.FC<MenuItemProps> = (props) =>{
    return(

        <li>   
          <Link to={props.path} >
                <i className={`fa fa-${props.icon}`}></i> 
                <span>{props.label}</span>
            </Link>
        </li>
        )

    }
    
    export default MenuItem