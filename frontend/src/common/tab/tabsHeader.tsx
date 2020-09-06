import React from 'react';

const TabsHeader: React.FC = (props)=>{

return(
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
    )
}

export default TabsHeader