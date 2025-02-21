import { toast } from 'react-toastify'

import Api from './api'

export const getAllMyEvents = async (id:number) => {
  try {
    const response = await Api.get<any>(`/inscripciones/my-events/${id}`)

    return response.data
  } catch (error) {
    toast.error(`No se obtuvo las inscripcoiones: ${error}`)
  }
}
