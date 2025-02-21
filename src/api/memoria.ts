import { toast } from 'react-toastify'

import Api from './api'

export const getAllMemories = async () => {
  try {
    const response = await Api.get<any>(`/memoria`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo las memorias: ${error}`)
  }
}
