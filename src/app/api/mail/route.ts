const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL
  }
})

transporter.verify().then(() => {
  console.log('Red for send emails')
})

export async function POST(request: Request) {
  const body = await request.json()

  const { params, destinationMail } = body
  const { username, firstName, email, problemType, phoneNumber, message } = params

  const info = await transporter.sendMail({
    from: `"SOPORTE LAVC 👻" <${process.env.USER_MAIL}>`, // Cambia a tu correo autenticado
    to: destinationMail, // Cambia a tu correo de destino
    subject: 'Nuevo mensaje de contacto',
    html: `<b>Nombres:</b> ${username}<br><b>Apellidos:</b> ${firstName}<br><b>Correo:</b> ${email}<br><b>Problema:</b> ${problemType}<br><b>Número:</b> ${phoneNumber}<br><b>Mensaje:</b> ${message}`
  })

  if (info.accepted && info.accepted.length > 0) {
    return new Response(JSON.stringify({ success: true, messaje: 'Mensaje enviando exitosamente' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } else {
    return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
