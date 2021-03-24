import React, { useEffect, useState } from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';



export const GifGrid = ({category}) => {

    //Variables
    const {data:images, loading} = useFetchGifs(category);
    //console.log(data);
    return (
        <>
            <h3 className='animate__animated animate__animate__fadeIn animate__delay-5s'>{category}</h3>

            { loading && <p className='animate__animated animate__animate__flash animate__delay-5s'>Loading...</p> }

            <div className='card-grid'>
                {
                    images.map( img => 
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        /> )                
                }
            </div>
        </>
        
    )
}
