import { getCulqiCheckout } from './ConfigCulqi'

export function CheckPaymentGateway(amount: number, typeOfPayment: string, setAlertMessage: (message: string) => void) {
  switch (typeOfPayment) {
    case 'NIUBIZ':
      setAlertMessage('Por el momento no implementamos esta forma de pago')
      break
    case 'CULQI':
      getCulqiCheckout(amount)
      break
    case 'PagoEfectivo':
      setAlertMessage('Por el momento no implementamos esta forma de pago')
      break
    default:
      setAlertMessage('Seleccione un tipo de pago')
  }
}
