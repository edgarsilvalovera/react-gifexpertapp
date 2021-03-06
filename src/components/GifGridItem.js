import React from 'react'

export default function GifGridItem( {id, title, url} ) {

     //console.log({id, title, url})
    return (
        <div className='card animate__animated animate__animate__fadeIn animate__delay-5s'>
            <img
                src={url}
                alt={title}
            />

            <p>{title}</p>
        </div>
    )
}
