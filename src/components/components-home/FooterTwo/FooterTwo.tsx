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
        bgcolor: 'var(--primary-color-purple)',
        height: '400px'
      }}
    >
      <Container sx={{ maxWidth: '80%', marginTop: '3%' }}>
        <Grid container spacing={5}>
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
              Professional Resources
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
            >
              Earn Veterinary CE
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
            >
              Earn CE Online with VetFolio
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
              Explore Opportunities
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
            >
              Event Calendar
            </Item>
            <Item
              className={`${style.hoverColor} ${style.footerOne}`}
              sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
            >
              Careers
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
              Stay Connected
            </Item>
            <Item
              className={style.footerOne}
              sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
            >
              <FacebookIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
              <LinkedInIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
              <InstagramIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
              <TwitterIcon className={style.hoverColor} sx={{ fontSize: '40px' }} />
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
                  width: '230px',
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
          bgcolor: 'var(--second-color-purple)'
        }}
      >
        <Container sx={{ maxWidth: '80%', marginTop: '20px' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Item
                className={style.footerOne}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <img src='images\logolavc\logo.ico' alt='logo' style={{ width: 150, height: 110 }} />
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
                NAVC Brand Guidelines
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
                © 2024 North American Veterinary Community Web Design by PHOS Creative
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
                  marginBottom: '1%'
                }}
              >
                FAQ
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  color: 'var(--letter-color)',
                  fontWeight: 'bold'
                }}
              >
                Media Kits
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  color: 'var(--letter-color)',
                  fontWeight: 'bold'
                }}
              >
                Terms and Conditions
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)',
                  marginBottom: '1%'
                }}
              >
                Privacy Policy
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)'
                }}
              >
                Cookie Policy
              </Item>
              <Item
                className={`${style.hoverColor} ${style.footerOne}`}
                sx={{
                  backgroundColor: 'var(--second-color-purple)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--letter-color)'
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
