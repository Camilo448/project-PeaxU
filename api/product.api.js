import axios from './axios'

export const getProductsRequest = () => axios.get('/products/get')
export const getProductRequest = (id) => axios.get(`/products/code/${id}`)
export const getProductByParameterRequest = (parameter) => axios.get(`/products/get-search?parameter=${parameter}`)
export const getProductsBySubCategory = (id) => axios.get(`/subcategories/${id}/products`)
export const getProductsByCategory = (id) => axios.get(`/categories/${id}/products`)