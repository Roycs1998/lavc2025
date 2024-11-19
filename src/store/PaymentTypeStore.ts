import { create } from 'zustand'

interface RucState {
  ruc: string
  typeOfPayment: string
  updateRuc: (rucUpdate: string) => void
  updateTypeOfPayment: (typeOfPaymentUpdate: string) => void
}

export const rucStore = create<RucState>(set => ({
  ruc: '',
  typeOfPayment: '',
  updateRuc: (rucUpdate: string) =>
    set({
      ruc: rucUpdate
    }),

  updateTypeOfPayment: (typeOfPaymentUpdate: string) =>
    set({
      typeOfPayment: typeOfPaymentUpdate
    })
}))
