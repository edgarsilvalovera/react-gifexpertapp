import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //Variables
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    //Fin Variables

    //Funciones
    //const handleAdd = () => setCategories( [...categories, 'Nueva Categoria'] );
    //Fin Funciones

    //Retorno
    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr></hr>

            
            
            <ul>
                {
                    categories.map( (category, index) => 
                        <GifGrid 
                            category={category} 
                            key={category}
                        />
                    )
                }
            </ul>
        </>
    );
    //Fin Retorno
};

export default GifExpertApp;