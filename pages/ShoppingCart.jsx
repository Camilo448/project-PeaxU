import React, { useContext } from "react";
import { ItemShoppingCart } from "./ItemShoppingCart";
import { ProductContext } from "../context/ProductContext";

export const ShoppingCart = () => {
  const { uploadCart } = useContext(ProductContext);
  let products = uploadCart;
  console.log(products);

  const colorNav = {
    backgroundColor: "#F8E559",
    color: "#402B3A",
  };

  const totalToPay = () => {
    let total = 0;
    for (let index = 0; index < uploadCart.length; index++) {
      console.log(total);
      total = total + uploadCart[index].quantity * uploadCart[index].price;
      console.log(total);
    }

    return total;
  };

  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-9">
            <div className="row m-5 d-flex justify-content-between">
              {products.map((product, i) => (
                <ItemShoppingCart
                  id={product.id}
                  key={i}
                  index={i}
                  name={product.name}
                  quantity={product.quantity}
                  image={product.img_product}
                  price={product.price}
                />
              ))}
            </div>
          </div>

          <div className="card col-3">
            <div className="card-header mt-3" style={colorNav}>
              <span className="fs-5 text-center">Resumen de la compra</span>
            </div>

            <div className="row my-4">
              <div className="col-7">
                <span className="fs-4">Total a pagar $</span>
              </div>
              <div className="col-5">
                <span className="fs-4">{totalToPay()}</span>
              </div>
            </div>

            <button className="btn btn-danger mb-5">Continuar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};
