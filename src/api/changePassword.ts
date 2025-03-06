import { toast } from 'react-toastify'

import Api from './api'

export const sendRequest = async (email:string) => {
  try {
    const response = await Api.post(`/auth/recover/`,{email})

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo las inscripcoiones: ${error}`)
  }
}
