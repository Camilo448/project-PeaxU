import React, { useEffect, useContext, useState } from "react";
import { ProductCard } from "../graphic- interface/components/ProductCard";
import { ProductContext } from "../context/ProductContext";

export const Products = () => {
  const size = {
    width: "18rem",
  };
  const {
    product,
    productsList,
    // filter,
    getProducts,
    // getProductsByCategory,
    // getProductsBySubCategory,
    // getProductsByParameter,
    setUploadCart,
    uploadCart
  } = useContext(ProductContext);

  const newProduct = (product) => {
      let newCart = uploadCart;
      newCart.push(product);
      setUploadCart(newCart);
  }

  useEffect(() => {
    getProducts();
    uploadCart;
  }, []);

  return (
    <div className="cataccesory">
      <h1 className="text-center m-5">Productos</h1>
      <div className="container mt-4">
        <div className="row m-5 d-flex justify-content-between">
          {productsList.map((product) => (
            <div className="card m-2" style={size}>
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                image={product.img_product}
                price={product.price}
              />
              <button
                onClick={() => {
                  product.quantity = 1
                  newProduct(product);
                }}
                className="btn btn-primary btn-block m-2"
              >
                Agregar al Carro de Compras
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
