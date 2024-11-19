'use client'

// React Imports
import type { CSSProperties } from 'react'

// Third-party Imports
import styled from '@emotion/styled'

type LogoTextProps = {
  color?: CSSProperties['color']
}

const LogoText = styled.span<LogoTextProps>`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-inline-start: 10px;
`

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
