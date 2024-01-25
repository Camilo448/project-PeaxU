import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ItemShoppingCart = ({ name, image, index, quantity, price }) => {
  const { uploadCart, setUploadCart } = useContext(ProductContext);
  const smallImage = {
    height: "70px",
    width: "70px",
  };

  const deleteItem = (index) => {
    if (index >= 0 && index < uploadCart.length) {
      const updatedCart = [
        ...uploadCart.slice(0, index),
        ...uploadCart.slice(index + 1),
      ];
      setUploadCart(updatedCart);
    }
  };

  const sum = () => {
    setUploadCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity++;
      return updatedCart;
    });
  };

  const rest = () => {
    setUploadCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity--;
      }
      return updatedCart;
    });
  };

  const total = () => {
    return quantity * price;
  };

  return (
    <div className="card mt-2">
      <div className="row align-items-center my-2">
        <div className="col-1">
          <img
            src={image}
            className="img-fluid"
            style={smallImage}
            alt={`Imagen de ${name}`}
          />
        </div>

        <div className="col-7">
          <div className="row">
            <span className="fs-3">{name}</span>
            <div>
              <button
                onClick={() => deleteItem(index)}
                className="btn btn-danger mt-2"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className="col-2 d-flex justify-content-center">
          <div className="row col-md-8 text-center align-items-center">
            <button
              onClick={() => rest()}
              className="col-4 btn btn-outline-warning"
            >
              {" "}
              -{" "}
            </button>
            <p className="col-4 fs-6 mt-2"> {quantity} </p>
            <button
              onClick={() => sum()}
              className="col-4 btn btn-outline-warning"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>

        <div className="col-2 d-flex justify-content-center">{total()}</div>
      </div>
    </div>
  );
};
