import type { WorkshopType } from './WorkshopType'

export interface Workshop {
  codeWorkshop: number
  workshopName: string
  workshopStartDate?: Date
  workshopEndDate?: Date
  workshopSchedule: string
  workshopState: number
  workshopRegistrationDate?: Date
  workshopPhoto: string
  workshopCostProfessionals: number
  workshopCostHighschoolStudents: number
  CostOfWorkshopForForeignProfessionals: number
  CostOfTheWorkshopForForeignStudents: number
  workshopCost: number
  workshopCostProfessionalsDollars: number
  workshopCostHighSchoolStudentsDollars: number
  workshopDescription: string
  location: string
  addressLocation: string
  certified_workshop: number
  workshopType: WorkshopType
  workshopTypeId: number
}
