import { Main } from '../Main'
import { HorizontalCard } from '../HorizontalCard'

export const Body = () => {
  return (
    <div>
      <Main />
      <h1>
        Card: Este es el contenedor principal de la carta Configura la carta para que se muestre en un formato flexible
        y establece un ancho máximo. CardMedia: Este componente se utiliza para mostrar imágenes dentro de la carta. :
        Indica que el contenido es una imagen. sx= Establece un ancho específico para la imagen. Box: Utilizado para
        crear una estructura flexible en columna para el contenido de la carta. CardContent: Contiene el texto que
        describe la carta. Typography: Se utiliza para mostrar el título y el texto descriptivo de la carta.
        Personalización Puedes personalizar el diseño de la carta horizontal ajustando las propiedades de estilo en sx y
        añadiendo más contenido o componentes según tus necesidades. Si deseas que la carta sea más interactiva,
        considera añadir botones u otros elementos dentro de CardContent. Uso en tu Aplicación Para usar el componente
        HorizontalCard, simplemente importa y colócalo en el lugar deseado de tu aplicación:
      </h1>
      <HorizontalCard />
    </div>
  )
}
