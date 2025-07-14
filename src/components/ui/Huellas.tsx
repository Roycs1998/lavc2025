import HuellaSVG from '@/images/huellas/huellas.svg'
import HuellaPatoSVG from '@/images/huellas/huellas_pato.svg'

import style from './Huellas.module.css'

interface Props {
  tipoHuellas?: 'perro' | 'pato'
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  rotateDeg?: number
  color?: string
  opacity?: number
  height?: string
  className?: string
}

export const Huellas = ({
  tipoHuellas = "perro",
  position = { top: '-90px', right: '100px' },
  rotateDeg = -20,
  color = '#3a3480',
  opacity = 0.3,
  height = '800px',
  className = ''
}: Props) => {

  const styleInline = {
    ...position,
    transform: `rotate(${rotateDeg}deg)`,
    fill: color,
    opacity: opacity,
    height,
  }

  const HuellaComponent = tipoHuellas === "pato" ? HuellaPatoSVG : HuellaSVG

  return (
    <HuellaComponent
      className={`${style.huellaDecorativa} ${className}`}
      style={styleInline}
    />
  )
}
