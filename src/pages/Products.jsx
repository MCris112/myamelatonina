import React from 'react'

import { Link } from 'react-router-dom';
import {vproducts, categories, companies} from '../assets/products';

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

            {
                Object.keys(companies).map((key) => (
                    <div className="">{companies[key].name}</div>
                ))
            }

            {sideTitle('Caregorias')}

            {
                Object.keys(categories).map((key) => (
                    <div className="">{categories[key].title}</div>
                ))
            }
        </div>
        <div className="w-3/4">
            <div className="grid grid-cols-3">
            {
                Object.keys(vproducts).map((key) => (
                    <Link key={key} className="text-center w-full h-full grid">
                        <img src={vproducts[key].image} alt="" />
                        <p className="text-primary font-bold">{vproducts[key].title}</p>
                        <span>Contiene 240 tabletas</span>
                        <p>s/.150</p>

                        <div className="btn">Más Información</div>
                    </Link>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Products