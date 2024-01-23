import React, { useEffect, useState, useContext } from "react"
import { ProductCard } from "../graphic- interface/components/ProductCard"
import { ProductContext } from "../context/ProductContext"

export const Products = () => {
    const {
        product,
        productsList,
        // filter,
        getProducts,
        // getProductsByCategory,
        // getProductsBySubCategory,
        // getProductsByParameter
    } = useContext(ProductContext)

    let cart = [];

    const uploadCart = ( product ) => {
        cart.push( product)
        localStorage.setItem('cart', JSON.stringify(cart));
        
    }

    useEffect(() => {
        getProducts()
    }, [])

    // useEffect(() => {
    //     switch (filter.type) {
    //         case 'category':
    //             getProductsByCategory(filter.value)
    //             break
    //         case 'subcategory':
    //             getProductsBySubCategory(filter.value)
    //             break
    //         case 'search':
    //             getProductsByParameter(filter.value)
    //             break
    //         default:
    //             getProducts()
    //     }  
    // }, [
    //     filter, getProducts, getProductsBySubCategory, getProductsByCategory, getProductsByParameter
    // ])

    // const getTitleText = () => {
    //     switch (filter.type) {
    //         case 'category':
    //             return `Categoría ${filter.value}`
    //         case 'subcategory':
    //             return `Subcategoría: ${filter.value}`
    //         case 'search':
    //             return `Esto es lo que coincide con tu búsqueda: ${filter.value}`
    //         default:
    //             return 'Nuestros productos'
    //     }
    // }

    return (
    <div className="cataccesory">
        <h1 className='text-center m-5'>
            Productos
        </h1>
        <div className="container mt-4">
            <div className="row m-5 d-flex justify-content-between">
                {productsList.map(product => (
                    <div>
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            image={product.img_product}
                            price={product.price}
                        />
                        <button onClick={ () => { uploadCart( product ) }} className="btn btn-primary btn-block m-2">Agregar al Carro de Compras</button>
                    </div>
                    

                        
                    ))      
                }
            </div>
        </div>
    </div>
  )
} 