import React from  'react'
import Menu from './menu'

const SideBar : React.FC = () =>{
    return(
    <aside className='main-sidebar'>
        <section className='sidebar'>
            <Menu />
        </section>
    </aside>
        )

}

export default SideBar