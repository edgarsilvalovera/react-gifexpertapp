import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    //Variables
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Funciones
    //console.log(category);
    useEffect( () => {
        getGifs(category)
            .then( imgs => {

                setTimeout(() => {

                    setstate({
                        data: imgs,
                        loading: false
                    });
                },4000);

            });
    }, []);//Para que se ejecute una sola vez // Si la ategory cambia vuelvo y hace el efecto si el array[] esta vacio lo hace una sola vez





    return state;
}
