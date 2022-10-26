import React, { useState, useEffect } from "react";

import { vproducts, categories, companies } from "../../public/assets/products";
import { ProductItem } from "../../components";
import { Navbar } from "../../components";

const Productos = () => {
  const [showProducts, setShowProducts] = useState({})
  const [showCategories, setShowCategories] = useState({})
  const [showCompanies, setShowCompanies] = useState({})

  useEffect(() => {
    setShowCategories(categories)
    setShowProducts(vproducts)

    console.log(showCategories)
  }, [vproducts, categories])

  

  const sideTitle = (title) => {
    return (
      <div className="flex items-center w-full gap-1">
        <h2>{title}</h2>
        <hr className="w-full h-1 border-3 bg-primary" />
      </div>
    );
  };

  const setCompany = (event) => {
    var slugCompany = event.target.getAttribute("cri-data-com-id");

    if (event.target.checked) {
      let items = Object.values(vproducts).filter((product) => {
        return product.company == slugCompany
      })

      console.log("items", items)

      setShowProducts(vproducts)
    }
  }

  const addCategory = (event) => {
    var slugCategory = event.target.getAttribute("cri-data-cat-id");

    if (event.target.checked) {
      setShowCategories({slugCategory});
    }
  };
  return (
    <div className="">
      <Navbar />

      <div className="container flex flex-col gap-4 py-9 sm:flex-row">
        <div className="w-full sm:w-1/4">
          {sideTitle("Marca")}

          {Object.keys(companies).map((key) => (
            <div key={key} className="">
              <input
                type="checkbox"
                onChange={setCompany}
                cri-data-com-id={key}
              />
              {companies[key].name}
            </div>
          ))}

          {sideTitle("Categorias")}

          {Object.keys(categories).map((key) => (
            <div key={key} className="">
              <input
                type="checkbox"
                onChange={addCategory}
                cri-data-cat-id={key}
              />
              {categories[key].title}
            </div>
          ))}
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.keys(showProducts).map((key) => (
              <div key={key} className={` ${vproducts[key]['categories'].includes(showCategories) ? 'block' : 'hidden'} `}>
                {vproducts[key] ? <ProductItem product={vproducts[key]} slug={key} /> : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
