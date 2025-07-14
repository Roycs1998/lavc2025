import Link from "next/link";

import { Button, Grid, Typography } from "@mui/material";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import type { Inscripcion } from "@/interfaces/my-events/interface";

import CardLifetimeMembership from "@/views/card-basic/CardLifetimeMembership";

interface Props {
  EventList: Inscripcion[];
}

const ListEvent = ({ EventList }: Props) => {
  if (!EventList || EventList.length === 0) {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        
      >
        <SentimentDissatisfiedIcon sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h6" align="center" gutterBottom>
          Upps, no hay tickets para mostrar.
        </Typography>
        <Link href="/eventos-talleres" passHref>
          <Button variant="contained" color="primary">
            Comprar Entradas
          </Button>
        </Link>
      </Grid>
    );
  }


  return (
    <>
      {EventList.map((evento) => (
        <Grid item xs={10} md={10} key={evento.inscripcion_codigo}>
          <CardLifetimeMembership EventInfo={evento} />
        </Grid>
      ))}
    </>
  );
};

export default ListEvent;
