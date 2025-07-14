import { toast } from 'react-toastify'

import Api from './api'

export const getAllPonentes = async () => {
  try {
    const response = await Api.get<any>(`/ponente`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo los ponentes: ${error}`)
  }
}


export const getPonente = async (id:string) => {
  try {
    const response = await Api.get<any>(`/ponente/${id}`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo los ponentes: ${error}`)
  }
}

