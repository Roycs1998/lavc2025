import { Inscripcion } from "@/interfaces/my-events/interface"
import CardLifetimeMembership from "@/views/card-basic/CardLifetimeMembership"
import { Grid, Typography } from "@mui/material"

interface Props{
  EventList: Inscripcion[]
}

const ListEvent = ({EventList}:Props) => {

/*   if (!EventList || EventList.length === 0) {
    return (
      <Grid item xs={10} md={10} >
      <Typography variant="h3" sx={{ textAlign: 'center', mt: 4 }}>
        No hay registros
      </Typography>
      </Grid>
    );
  } */

  return(
    <>
      { EventList.map((evento) => {
        return (
          <Grid item xs={10} md={10} key={evento.inscripcion_codigo}>
            <CardLifetimeMembership EventInfo={evento} />
          </Grid>
        )
      })}
    </>
  )
}

export default ListEvent
