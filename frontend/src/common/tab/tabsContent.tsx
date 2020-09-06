import React from 'react';

const TabsContent: React.FC = (props)=>{

return(
    <div className='nav-tabs-content'> 
        {props.children}
    </div> 
    )
}

export default TabsContent