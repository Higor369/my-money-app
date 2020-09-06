import React from 'react';

const Tabs: React.FC = (props)=>{

return(
    <div className='nav-tabs-custom'> 
        {props.children}
    </div> 
    )
}

export default Tabs