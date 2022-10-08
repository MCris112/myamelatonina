import React, { useState } from "react";

import { Link } from "react-router-dom";
import { vproducts, categories, companies } from "../assets/products";

const Products = () => {
  let [showProducts, setShowProducts] = useState(vproducts);
  let showCategories = [];

  const handleCategories = () => {
    console.log("categories", showCategories);

    if (showCategories.length == 0) {
      console.log("categories false", showCategories.length);
      setShowProducts(vproducts);
      return true;
    }

    let newProducts = Object.values(vproducts).filter((product) => {
      var is_in = false;

      showCategories.map((value, index) => {
        if (product["categories"].includes(value)) is_in = true;
      });

      return is_in;
    });

    console.log(newProducts);
    setShowProducts(newProducts);
  };

  const sideTitle = (title) => {
    return (
      <div className="flex items-center w-full gap-1">
        <h2>{title}</h2>
        <hr className="w-full h-1 border-3 bg-primary" />
      </div>
    );
  };

  const addCategory = (event) => {
    var slugCategory = event.target.getAttribute("cri-data-cat-id");

    if(event.target.checked){
        console.log("true");
        if (!showCategories.includes(slugCategory)) {
            console.log("no incluye");
          showCategories.push(slugCategory);
        }
        
        handleCategories();
        return
    }

    console.log("incluye");
    const index = showCategories.indexOf(slugCategory);

    if (index > -1) {
      // only splice array when item is found
      showCategories.splice(index, 1); // 2nd parameter means remove one item only
    }

    handleCategories();

    console.log("ShowCategories", showCategories);
  };
  return (
    <div className="container flex gap-4">
      <div className="w-1/4">
        {sideTitle("Marca")}

        {Object.keys(companies).map((key) => (
          <div key={key} className="">
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
        <div className="grid grid-cols-3">
          {Object.keys(showProducts).map((key) => (
            <Link key={key} className="text-center w-full h-full grid">
              <img src={showProducts[key].image} alt="" />
              <p className="text-primary font-bold">
                {showProducts[key].title}
              </p>
              <span>Contiene 240 tabletas</span>
              <p>s/.150</p>

              <div className="btn">Más Información</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
