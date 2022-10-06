import React from 'react'

import {vproducts} from '../assets/products';

const Products = () => {

    function sideTitle(title){
        return (
            <div className="flex items-center w-full gap-1">
                <h2>{title}</h2>
                <hr className="w-full h-1 border-3 bg-primary"/>
            </div>
        )
    }

  return (
    <div className="container flex gap-4">
        <div className="w-1/4">
            {sideTitle('Marca')}

            {sideTitle('Caregorias')}
        </div>
        <div className="w-3/4">
            {
                Object.keys(vproducts).map((key) => (
                    <div key={key} className="">
                        {vproducts[key].title}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products