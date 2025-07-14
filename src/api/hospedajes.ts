import { toast } from 'react-toastify'

import Api from './api'

export const getAllHospedajes = async () => {
  try {
    const response = await Api.get<any>(`/hospedaje`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvieron los hospedajes: ${error}`)
  }
}


export const getHospedaje = async (id:string) => {
  try {
    const response = await Api.get<any>(`/ponente/${id}`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo los ponentes: ${error}`)
  }
}
