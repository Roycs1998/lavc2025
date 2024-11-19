import Swal from 'sweetalert2'

export function getConfig(amount: number) {
  return {
    settings: {
      title: 'LAVC 2025',
      currency: 'PEN', // Este parámetro es requerido para realizar pagos
      amount: amount * 100 // Este parámetro es requerido para realizar pagos
    },
    appearance: {
      theme: 'default',
      buttonCardPayText: 'Pagar'
    }
  }
}

export async function getCulqiCheckout(amount: number) {
  const _culqi = new (window as any).CulqiCheckout(process.env.NEXT_PUBLIC_CULQI_PUBLICKEY, getConfig(amount))

  if (!_culqi) {
    Swal.fire({
      title: '¡ERROR!',
      text: 'Error en el proveedor culqi',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })

    return
  }

  console.log('public_key', process.env.NEXT_PUBLIC_CULQI_PUBLICKEY)

  _culqi.open()

  if (_culqi) {
    _culqi.close()

    Swal.fire({
      title: '¡ÉXITO!',
      text: 'El pago se realizó correctamente.',
      icon: 'success',
      showCancelButton: true,
      cancelButtonText: 'Cerrar', // Cambia el texto del botón de cancelar
      confirmButtonText: 'Ver código QR' // Cambia el texto del botón de aceptar
    }).then(result => {
      // Verifica si el usuario hizo clic en el botón de confirmación
      if (result.isConfirmed) {
        // Aquí puedes agregar el código para mostrar la siguiente alerta (con el código QR)
        Swal.fire({
          title: 'Código QR',
          imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.U1S5NpMGxCdvgw4EJcMuegHaHa&pid=Api&P=0&h=180',
          confirmButtonText: 'Cerrar' // Cambia el texto del botón de cerrar
        })
      }
    })
  }

  _culqi.culqi = () => {
    if (_culqi.token) {
      const token = _culqi.token.id

      _culqi.close()

      Swal.fire({
        title: '¡ÉXITO!',
        text: 'El pago se realizó correctamente.',
        icon: 'success',
        showCancelButton: true,
        cancelButtonText: 'Cerrar', // Cambia el texto del botón de cancelar
        confirmButtonText: 'Ver código QR' // Cambia el texto del botón de aceptar
      }).then(result => {
        // Verifica si el usuario hizo clic en el botón de confirmación
        if (result.isConfirmed) {
          // Aquí puedes agregar el código para mostrar la siguiente alerta (con el código QR)
          Swal.fire({
            title: 'Código QR',
            imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.U1S5NpMGxCdvgw4EJcMuegHaHa&pid=Api&P=0&h=180',
            confirmButtonText: 'Cerrar' // Cambia el texto del botón de cerrar
          })
        }
      })

      console.log('Se ha creado un Token: ', token)
    } else if (_culqi.order) {
      _culqi.close()
      const order = _culqi.order

      Swal.fire({
        title: '¡ÉXITO!',
        text: 'El pago se realizó correctamente.',
        icon: 'success',
        showCancelButton: true,
        cancelButtonText: 'Cerrar', // Cambia el texto del botón de cancelar
        confirmButtonText: 'Ver código QR' // Cambia el texto del botón de aceptar
      }).then(result => {
        // Verifica si el usuario hizo clic en el botón de confirmación
        if (result.isConfirmed) {
          // Aquí puedes agregar el código para mostrar la siguiente alerta (con el código QR)
          Swal.fire({
            title: 'Código QR',
            imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.U1S5NpMGxCdvgw4EJcMuegHaHa&pid=Api&P=0&h=180',
            confirmButtonText: 'Cerrar' // Cambia el texto del botón de cerrar
          })
        }
      })

      console.log('Se ha creado el objeto Order: ', order)
    } else {
      Swal.fire({
        title: '¡ERROR!',
        text: _culqi.error,
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
      console.log('Error : ', _culqi.error)
    }
  }
}
