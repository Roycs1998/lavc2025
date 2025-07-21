import { toast } from 'react-toastify'

import Api from './api'

export const getAllFotos = async () => {
  try {
    const response = await Api.get<any>(`/foto`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo los ponentes: ${error}`)
  }
}


