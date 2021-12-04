import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One push']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map(categoria =>(
                        <GifGrid category={categoria} key={categoria}/>
                    ))
                }
            </ol>
        </>
    )
}
