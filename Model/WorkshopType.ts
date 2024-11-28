import type { Workshop } from './Workshop'

export interface WorkshopType {
  workshopTypeCode: number
  workshopTypeName: string
  workshopTypeStatus: number
  workshops: Workshop[]
}
