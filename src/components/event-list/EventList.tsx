import { Grid } from "@mui/material"

import type{ Inscripcion } from "@/interfaces/my-events/interface"

import CardLifetimeMembership from "@/views/card-basic/CardLifetimeMembership"

interface Props{
  EventList: Inscripcion[]
}

const ListEvent = ({EventList}:Props) => {

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
