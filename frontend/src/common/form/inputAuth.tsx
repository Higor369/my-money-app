import React from 'react'
import If from '../operators/if'


const InputAuth = (  props: any) => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon}
                form-control-feedback`}></span>
        </div>
    </If>
)

export default InputAuth