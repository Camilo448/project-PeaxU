import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ProductContext } from "../context/ProductContext";

export const SingleProduct = () => {
  const { productId } = useParams();

  const { getProductsById, product, isLoading  } = useContext(ProductContext);

  useEffect(() => {
    getProductsById(productId);
  }, [productId]);
  
  if (!isLoading) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body m-3 p-3">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img src={product.img_product} className="img-fluid" />
                  </div>
  
                  <div className="col-md-6 mt-2">
                    <h2 className="h4">{product.name}</h2>
                    <p className="lead">{product.price}</p>
  
                    <div className="row">
                      <div className="col-6 mt-3">
                        <span className="mb-3">seleccione una referencia</span>
                        <div className="mt-2">
                          <button className="btn">1 kg</button>
                          <button className="btn">2 kg</button>
                          <button className="btn">8 kg</button>
                        </div>
                      </div>
                      <div className="col-6 text-center">
                        <img
                          src="../assets/cart-plus.svg"
                          alt="carrito"
                          id="img_car"
                        />
                      </div>
                    </div>
  
                    <p className="mt-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iure officia labore consectetur! Amet harum culpa aliquam
                      eaque itaque expedita quam, excepturi voluptas doloremque!
                      Porro, qui? Unde voluptatibus dolor voluptates nostrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
};
