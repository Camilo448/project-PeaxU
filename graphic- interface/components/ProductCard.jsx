import React from 'react';

export const ProductCard = ({name, image, price}) => {

const size = {
  width: '18rem'
}

  return (
    <div className="card m-2" style={size}>
        <img src= {image} className="img-fluid card-img-top mx-auto d-block m-4" alt="Imagen del Producto"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-right">Costo: ${price}</p>
            <div className="form-group row d-flex align-items-center justify-content-center">
                <label for="cantidadInput" className="col-sm-5 col-form-label text-right">Cantidad:</label>
                <div className="col-sm-4">
                    <input type="number" className="form-control" id="cantidadInput" value="1"/>
                </div>
            </div>
            <button className="btn btn-primary btn-block m-2">Agregar al Carro de Compras</button>
        </div>
    </div>
  )
}