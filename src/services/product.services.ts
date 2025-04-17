import { Product } from "@/lib/types/product"
import { API } from "./api"

export const getProducts = async () => {
    const { data } = await API.get<{message: Product[]}>("/product")
    return data.message
}

export const getProductById = async (id: string) => {
    const { data } = await API.get<{message: Product}>(`/product/${id}`)
    return data.message
}

export const createProduct = async (newDate: FormData) => {
    const { data: response } = await API.post<{message: string}>("/product", newDate,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.message
}

export const updateProduct = async (id: string, newDate: FormData) => {
    const { data: response } = await API.put<{message: string}>(`/product/${id}`, newDate,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.message
}

export const deleteProduct = async (id: string) => {
    const { data: response } = await API.delete<{message: string}>(`/product/${id}`)
    return response.message
}