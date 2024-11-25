'use client'

const Logo = () => {
  return (
    <div className='flex items-center justify-center min-h-[24px]'>
      <img
        src='/images/logolavc/logo.ico' // Reemplaza con la URL de tu logotipo
        alt='Logotipo'
        style={{ width: '65px', height: 'auto', marginBottom: '20px' }}
      ></img>
    </div>
  )
}

export default Logo
