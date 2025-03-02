const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465, // Cambiado de 465 a 587
  secure: true, // Debe ser false si usas 587
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL
  }
});

transporter.verify().then(() => {
  console.log('Listo para enviar correos con GoDaddy')
})

export async function POST(request: Request) {
  const body = await request.json()

  const { params, destinationMail } = body
  const { username, firstName, email, problemType, phoneNumber, message } = params

  const info = await transporter.sendMail({
    from: `"LAVC Informes" <${process.env.USER_MAIL}>`, // Cambia a tu correo autenticado
    to: destinationMail, // Cambia a tu correo de destino
    subject: `${problemType} - LAVC`,
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
