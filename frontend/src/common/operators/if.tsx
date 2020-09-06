import React from 'react'

interface IfProps {
    test: string
}

 const If : React.FC<any> = (props) => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}

export default If