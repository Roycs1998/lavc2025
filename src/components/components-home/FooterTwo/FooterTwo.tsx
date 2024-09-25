'use client'
import * as React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

import { Box, Button, Container, Grid, Paper, styled } from '@mui/material'

import style from './Footer.module.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  }),
  border: 'none', // Elimina el borde
  boxShadow: 'none' // Elimina la sombra si hay
}))

export const FooterTwo = () => {
  return (
    <Box
      className={style.containerFooter}
      component='footer'
      sx={{
        py: 3,
        mt: 'auto',
        bgcolor: '#3A3480',
        height: '400px'
      }}
    >
      <Container sx={{ maxWidth: '80%', marginTop: '3%' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Item
              className={style.footerOne}
              sx={{
                backgroundColor: '#3A3480',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1%'
              }}
            >
              Professional Resources
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: '#3A3480', fontSize: '1rem', color: 'white' }}
            >
              Earn Veterinary CE
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: '#3A3480', fontSize: '1rem', color: 'white' }}
            >
              Earn CE Online with VetFolio
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item
              className={style.footerOne}
              sx={{
                backgroundColor: '#3A3480',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1%'
              }}
            >
              Explore Opportunities
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: '#3A3480', fontSize: '1rem', color: 'white' }}
            >
              Event Calendar
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: '#3A3480', fontSize: '1rem', color: 'white' }}
            >
              Careers
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item
              className={style.footerOne}
              sx={{
                backgroundColor: '#3A3480',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1%'
              }}
            >
              Stay Connected
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: '#3A3480', fontSize: '1rem', color: 'white' }}
            >
              <FacebookIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
              <LinkedInIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
              <InstagramIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
              <TwitterIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: '#3A3480', fontSize: '1rem', color: 'white', marginTop: '20px' }}
            >
              <Button
                variant='contained'
                disableElevation
                sx={{
                  width: '230px',
                  height: '55px',
                  bgcolor: 'white',
                  color: '#3A3480',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#695fcf', // No cambia el color de fondo en hover
                    color: 'white'
                  }
                }}
              >
                Disable elevation
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
      <Box
        component='footer'
        sx={{
          py: 3,
          mt: '4%',
          bgcolor: '#2d2a55'
        }}
      >
        <Container sx={{ maxWidth: '10%', marginTop: '20px' }}>
          <Grid container spacing={2} sx={{ marginLeft: '1%' }}>
            <Grid item xs={12} md={3}>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: '#2d2a55',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1%'
                }}
              >
                Professional Resources
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{ backgroundColor: '#2d2a55', fontSize: '0.9rem', color: 'white', marginBottom: '1%' }}
              >
                NAVC Brand Guidelines
              </Item>
              <Item className={style.footerOne} sx={{ backgroundColor: '#2d2a55', fontSize: '0.9rem', color: 'white' }}>
                © 2024 North American Veterinary Community Web Design by PHOS Creative
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                '@media (max-width: 1200px)': {
                  flexBasis: '50%'
                }
              }}
            >
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: '#2d2a55',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1%',
                  width: '20%',
                  marginLeft: '40%'
                }}
              >
                FAQ
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  width: '40%',
                  backgroundColor: '#2d2a55',
                  fontSize: '1rem',
                  color: 'white',
                  fontWeight: 'bold',
                  marginLeft: '35%'
                }}
              >
                Media Kits
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  width: '65%',
                  backgroundColor: '#2d2a55',
                  fontSize: '1rem',
                  color: 'white',
                  fontWeight: 'bold',
                  marginLeft: '25%',
                  textAlign: 'center'
                }}
              >
                Terms and Conditions
              </Item>
            </Grid>
            <Grid item xs={12} md={2}>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: '#2d2a55',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1%',
                  marginLeft: '-30%'
                }}
              >
                Privacy Policy
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  marginLeft: '-20%',
                  backgroundColor: '#2d2a55',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Cookie Policy
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  marginLeft: '-5%',
                  backgroundColor: '#2d2a55',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Privacy Statement
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
