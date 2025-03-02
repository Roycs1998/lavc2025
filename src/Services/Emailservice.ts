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

  if (params.problemType === 'inscripcion') {
    destinationMail = 'roycarisarmiento@gmail.com'
  } else if (params.problemType === 'informacion-stand') {
    destinationMail = 'roycarisarmiento@gmail.com'
  } else {
    destinationMail = 'roycarisarmiento@gmail.com'
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
