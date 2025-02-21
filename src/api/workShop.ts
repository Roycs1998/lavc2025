import Api from './api'

import type{ Workshop } from '@/interfaces'

export const getAllworkShop = async () => {
  try {
    const response = await Api.get<Workshop[]>('/workshop/activeWorkshops')

    return response.data

  } catch (error) {
    console.error("error al obtner los talleres", error)
  }finally{

  }

}

export const getWorkshopsById = async (id: number) => {
  try {

    const response = await Api.get<Workshop>(`/workshop/${id}`)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

