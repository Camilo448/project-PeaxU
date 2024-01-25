import axios from "./axios";

export const getProductsRequest = () => axios.get("/products/get");
export const getProductRequest = (id) => axios.get(`/products/code/${id}`);
export const getByParameterRequest = (parameter) =>
  axios.get(`/products/get-search?parameter=${parameter}`);
export const getBySubCategoryRequest = (id) =>
  axios.get(`/subcategories/${id}/products`);
export const getByCategoryRequest = (id) =>
  axios.get(`/categories/${id}/products`);
