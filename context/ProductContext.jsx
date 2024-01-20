import React, { createContext, useState, useEffect } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null)
}