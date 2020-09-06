import React from 'react'

interface GridProps{
    cols?:string;
}

const Grid:React.FC<GridProps> = (props) =>{

    const gridClasses = toCssClasses(props.cols || '12')

    return(
    <div className={gridClasses}> 
        {props.children}
    </div> 
    )
}

function toCssClasses(numbers : string){        
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if(cols[0]) classes += `col-xs-${cols[0]}` 
    if(cols[1]) classes += ` col-sm-${cols[1]}`
    if(cols[2]) classes += ` col-md-${cols[2]}`
    if(cols[3]) classes += ` col-lg-${cols[3]}`

    return classes 
}


export default Grid;