'use client'
import * as React from 'react'

import Link from 'next/link'

import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import { Box, Button, Container, Grid, Paper, styled } from '@mui/material'

import style from './Footer.module.css'
import type { getDictionary } from '@/utils/getDictionary'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width: '100%',
  border: 'none', // Elimina el borde
  boxShadow: 'none' // Elimina la sombra si hay
}))

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

//{dictionary?.nav_main?.informationLetters.accommodations}
export const FooterTwo = ({ dictionary }: Props) => {
  return (
    <Box
      className={`${style.containerFooter} `}
      component='footer'
      sx={{
        py: 3,
        mt: 'auto',
        bgcolor: 'var(--primary-color-purple)',
        height: '350px'
      }}
    >
      <Box className='global-padding' sx={{ bgcolor: 'var(--primary-color-purple)', height: '100%' }}>
        <Container sx={{ maxWidth: '100%', paddingTop: '5%' }}>
          <Grid container spacing={11}>
            <Grid item xs={12} md={4}>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: 'var(--primary-color-purple)',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  marginBottom: '1%'
                }}
              >
                {dictionary?.nav_main?.footer.professional_resources}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
              >
                {dictionary?.nav_main?.footer.earn_veterinary_ce}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
              >
                {dictionary?.nav_main?.footer.earn_veterinary_ce}
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: 'var(--primary-color-purple)',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  marginBottom: '1%'
                }}
              >
                {dictionary?.nav_main?.footer.explore_opportunities}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
              >
                {dictionary?.nav_main?.footer.event_calendar}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
              >
                {dictionary?.nav_main?.footer.event_calendar}
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: 'var(--primary-color-purple)',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  marginBottom: '1%'
                }}
              >
                {dictionary?.nav_main?.footer.Stay_connected}
              </Item>
              <Item
                className={style.footerOne}
                sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
              >
                <Link href={'https://www.facebook.com/conferencia.veterinaria.latinoamericana/'}>
                  <FacebookIcon className={style.hoverColor} sx={{ fontSize: '50px' }} />
                </Link>
                <Link href={'https://www.youtube.com/channel/UCBBXdp5Wohtn9yuihiREkEg?view_as=subscriber'}>
                  <YouTubeIcon className={style.hoverColor} sx={{ fontSize: '50px', marginLeft: '4%' }} />
                </Link>
                <Link href={''}>
                  <MailOutlineIcon className={style.hoverColor} sx={{ fontSize: '50px', marginLeft: '4%' }} />
                </Link>
                <Link href={'https://api.whatsapp.com/send?phone=51985174876'}>
                  <WhatsAppIcon className={style.hoverColor} sx={{ fontSize: '50px', marginLeft: '4%' }} />
                </Link>
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--primary-color-purple)',
                  fontSize: '1rem',
                  color: 'var(--letter-color)',
                  marginTop: '20px'
                }}
              >
                <Button
                  variant='contained'
                  disableElevation
                  sx={{
                    width: '270px',
                    height: '55px',
                    bgcolor: 'white',
                    color: 'var(--primary-color-purple)',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'var(--color-on-hover)', // No cambia el color de fondo en hover
                      color: 'var(--letter-color)'
                    }
                  }}
                >
                  {dictionary?.nav_main?.footer.advertise_with_us}
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        className='global-padding'
        component='footer'
        sx={{
          py: 3,
          bgcolor: 'var(--second-color-purple)'
        }}
      >
        <Container sx={{ maxWidth: '100%', marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  display: 'flex',
                  textAlign: 'center'
                }}
              >
                <Link href={'/'}>
                  <img src='images\logolavc\logo.ico' alt='logo' style={{ width: 150, height: 110 }} />
                </Link>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '0.9rem',
                  color: 'var(--letter-color)',
                  marginBottom: '1%'
                }}
              >
                {dictionary?.nav_main?.footer.navc_brand}
              </Item>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '0.9rem',
                  color: 'var(--letter-color)',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                {dictionary?.nav_main?.footer.comunity_veterinary}
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{}}>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  marginBottom: '1%',
                  textAlign: 'center'
                }}
              >
                {dictionary?.nav_main?.footer.media_kits}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  color: 'var(--letter-color)',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                {dictionary?.nav_main?.footer.media_kits}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  color: 'var(--letter-color)',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                {dictionary?.nav_main?.footer.media_kits}
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  marginBottom: '1%',
                  textAlign: 'center'
                }}
              >
                {dictionary?.nav_main?.footer.media_kits}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  textAlign: 'center'
                }}
              >
                {dictionary?.nav_main?.footer.media_kits}
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  textAlign: 'center'
                }}
              >
                {dictionary?.nav_main?.footer.media_kits}
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
