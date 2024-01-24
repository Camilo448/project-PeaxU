import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ name, image, price, id }) => {
  const size = {
    width: "18rem",
  }

  return (
    <Link to={`/products/${id}`}>
      <div>
        <img
          src={image}
          className="img-fluid card-img-top mx-auto d-block m-4"
          alt="Imagen del Producto"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-right">Costo: ${price}</p>
          <div className="form-group row d-flex align-items-center justify-content-center">
            <div className="col-sm-4">
            </div>
          </div>
        </div>
      </div>
    </Link>
    
  );
};
