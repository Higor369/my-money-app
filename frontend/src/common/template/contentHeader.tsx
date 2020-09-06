import React from 'react'


interface ContentHeaderProps{
    title: string;
    small: string;
}

 const ContentHeader:React.FC<ContentHeaderProps> = (props) => (
    <section className='content-header'>
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)

export default ContentHeader;