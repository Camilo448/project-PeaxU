import React, { createContext, useState, useEffect } from "react"
import { getByCategoryRequest, getByParameterRequest, getBySubCategoryRequest, getProductsRequest } from "../api/product.api"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null)
    const [productsList, setProductList] = useState([])
    const [filter, setFilter] = useState({
        type: 'all',
        value: ''
    })

    const getProductsByCategory = async (id) => {
        try {
            const res = await getByCategoryRequest(id)
            const products = res.data.products.reduce(
                (acc, newArray) => acc.concat(newArray), []
            )
            setProductList(products)
            // setFilter({
            //     type: 'category',
            //     value: id
            // })
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsBySubCategory = async (id) => {
        try {
            const res = await getBySubCategoryRequest(id)
            setProductList(res.data)
            // setFilter({
            //     type: 'subcategory',
            //     value: id
            // })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsByParameter = async (parameter) => {
        try {
            const res = await getByParameterRequest(parameter)
            setProductList(res.data)
            // setFilter({
            //     type: 'search',
            //     value: parameter
            // })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getProducts = async () => {
        try {
            const res = await getProductsRequest()
            setProductList(res.data)
            // setFilter({
            //     type: 'all',
            //     value: ''
            // })
            console.log(res.data[0].img_product)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <ProductContext.Provider value={{
            product,
            productsList,
            filter,
            getProducts,
            getProductsByCategory,
            getProductsBySubCategory,
            getProductsByParameter
        }}>
            {children}
        </ProductContext.Provider>
    )
}