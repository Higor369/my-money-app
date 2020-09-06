import React from 'react'
import Grid from '../layout/grid'

type LabelAndInputProps ={
    cols: string;
    name: string;
    label: string;
    placeholder: string;
    readOnly: boolean;
    type: string
    input: any;
}

const LabelAndInput: React.FC<LabelAndInputProps> =  props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className='form-control'
                 placeholder={props.placeholder}
                 readOnly={props.readOnly} type={props.type} />
        </div>
    </Grid>)

export default LabelAndInput 