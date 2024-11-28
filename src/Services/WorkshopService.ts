import type { Workshop } from './../../Model/Workshop'
import { LavcUrls } from './Url'

export const getWorkshops = async () => {
  try {
    const response = await fetch(LavcUrls.workshop.all)
    const workshops: Workshop[] = await response.json()

    console.log(workshops)

    return workshops
  } catch (error) {
    console.log(error)
  }
}

export const getWorkshopsById = async (id: number) => {
  try {
    const response = await fetch(LavcUrls.workshop.searchById(id))
    const workshops: Workshop = await response.json()

    console.log(workshops)

    return workshops
  } catch (error) {
    console.log(error)
  }
}
