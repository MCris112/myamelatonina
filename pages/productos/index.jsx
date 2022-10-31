import React, { useState, useEffect } from "react";

import { vproducts, categories, companies } from "../../public/assets/products";
import { ProductItem } from "../../components";
import { Navbar, Footer, HeadComponent    } from "../../components";


const Productos = () => {
  const [showProducts, setShowProducts] = useState({})

  var showCategories = []

  useEffect(() => {
    setShowProducts(vproducts)
  }, [vproducts])

  const updateProducts = () => {
    var productsReturn = {}

    if(showCategories.length == 0) {
      setShowProducts(vproducts)

      return
    }

    Object.keys(vproducts).map((key) => {
      const product = vproducts[key];
      for(var i = 0; i < product['categories'].length; i++){
        console.log("cat seleccionada: ", product['categories'][i]);
        console.log("incluye? ", showCategories.includes(product['categories'][i]))
        if( showCategories.includes(product['categories'][i]) ){
          productsReturn[key] = product
          return true
        }
      }
    })

    console.log("productsReturn", productsReturn)

    setShowProducts(productsReturn)
  }

  const sideTitle = (title) => {
    return (
      <div className="flex items-center w-full gap-1">
        <h2 className="font-bold text-primary">{title}</h2>
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
      showCategories.indexOf(slugCategory) === -1 ? showCategories.push(slugCategory) :  true
    }

    updateProducts()
    console.log("categories", showCategories)
  };
  return (
    <div className="">

      <HeadComponent page="Productos" description="Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza." keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />

      <div className="container flex flex-col gap-4 py-9 sm:flex-row">
        <div className="w-full sm:w-1/4">
          {/* {sideTitle("Marca")}

          {Object.keys(companies).map((key) => (
            <div key={key} className="">
              <input
                type="checkbox"
                onChange={setCompany}
                cri-data-com-id={key}

                id={`com-${key}`}
              />

              <label htmlFor={`com-${key}`}>{companies[key].name}</label>
              
            </div>
          ))} */}

          {sideTitle("Categorias")}

          <form action="#" className="pl-3 mt-3">
          {Object.keys(categories).map((key) => (
            <div key={key} className="flex gap-1">
              <input
                type="radio"
                onChange={addCategory}
                cri-data-cat-id={key}

                name="category"
                id={`cat-${key}`}
                value={key}
              />

              <label htmlFor={`cat-${key}`} className="cursor-pointer">{categories[key].title}</label>
            </div>
          ))}
          </form>
          
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.keys(showProducts).map((key) => (
                vproducts[key] ? <ProductItem product={vproducts[key]} slug={key} key={key} /> : ""
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Productos;
