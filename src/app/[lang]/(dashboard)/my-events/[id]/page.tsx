// MUI Imports
import { redirect } from 'next/navigation'

import Grid from '@mui/material/Grid'

import Divider from '@mui/material/Divider'

// Components Imports
import ListEvent from '../../../../../components/event-list/EventList'

import { getAllMyEvents } from '@/api/inscripciones'
import SectionTitle from '@/components/SectionTitle'

interface Props {
  params: {
    id: string
  }
}

const CardBasic = async ({ params }: Props) => {

  if (!params.id) {
    redirect('/')
  }

  const listEvents = await getAllMyEvents(Number(params.id))

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <SectionTitle
          title={'Mis eventos'}
          subTitle={'Todos los eventos en los que participaste'}
          showIcon={false}
        />
        <Divider />
      </Grid>
      <ListEvent EventList={listEvents} />

      {/*       <Grid item xs={12} sm={6} md={4}>
        <CardInfluencingInfluencerWithImg />
      </Grid> */}
      {/*       <Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWatch />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencingInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h3'>Navigation Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWithTabs />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWithTabsCenter />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h3'>Solid Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid> */}
    </Grid>
  )
}

export default CardBasic
