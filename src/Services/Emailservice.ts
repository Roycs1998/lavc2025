interface MailParams {
  username: string
  firstName: string
  email: string
  problemType: string
  phoneNumber: string
  message: string
}

export const getInformationForMail = async (params: MailParams) => {
  let destinationMail = ''

  if (params.problemType === 'Inscripción') {
    destinationMail = 'villlarueljonas@gmail.com'
  } else if (params.problemType === 'Información sobre STAND') {
    destinationMail = 'villlarueljonas@gmail.com'
  } else {
    destinationMail = 'villlarueljonas@gmail.com'
  }

  const response = await fetch('/api/mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ params, destinationMail })
  })

  const result = await response.json()

  console.log(result)

  if (result.success) {
    return result.messaje
  } else {
    return result.error
  }
}
