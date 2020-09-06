import React from 'react'

const Content:React.FC = (props) =>{

    return(
        <section className='content'>{props.children}</section>
    )
}

export default Content;