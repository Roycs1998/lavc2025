'use client'
import * as React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import FacebookIcon from '@mui/icons-material/Facebook'

import YouTubeIcon from '@mui/icons-material/YouTube'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import InstagramIcon from '@mui/icons-material/Instagram'
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

            }}
        >
            <Box className='global-padding' sx={{ bgcolor: 'var(--primary-color-purple)', height: '100%' }}>
                <Container sx={{ maxWidth: '100%', paddingTop: '30px' }}>
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
                               Somos
                            </Item>
                            <Item
                                className={style.footerOne}
                                sx={{
                                    backgroundColor: 'var(--primary-color-purple)',
                                    color: 'var(--letter-color)',
                                }}
                            >
                            </Item>
                            <Item
                                className={style.footerOne}
                                sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
                            >
                                <Link href='/'>
                                    <Image src='/images/logolavc/logo.png' width={120} height={43} alt='LAVC Logo' />
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
                                    Contactanos
                                </Button>
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
                                {dictionary?.nav_main?.footer.professional_resources}
                            </Item>
                            <Link href="/soporte">
                                <Item
                                    className={`${style.hoverColor} ${style.footerOne}`}
                                    sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
                                >
                                    Soporte
                                </Item>
                            </Link>
                            <Link href="/programa">
                                <Item
                                    className={`${style.hoverColor} ${style.footerOne}`}
                                    sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
                                >
                                    Programa de charlas
                                </Item>
                            </Link>
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
                            <Link href="/brippie">
                                <Item
                                    className={`${style.hoverColor} ${style.footerOne}`}
                                    sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
                                >
                                    Beca Rippie
                                </Item>
                            </Link>
                            <Link href="/embajador">
                                <Item
                                    className={`${style.hoverColor} ${style.footerOne}`}
                                    sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
                                >
                                    Convierteté en embajador
                                </Item>
                            </Link>
                            <Link href="/ponentes">
                                <Item
                                    className={`${style.hoverColor} ${style.footerOne}`}
                                    sx={{ backgroundColor: 'var(--primary-color-purple)', fontSize: '1rem', color: 'var(--letter-color)' }}
                                >
                                    Ponentes
                                </Item>
                            </Link>
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
                <Container sx={{ maxWidth: '100%', mt: '20px' }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', sm: 'flex-start' },
                                textAlign: { xs: 'center', sm: 'left' },
                            }}
                        >
                            <Item
                                className={`${style.hoverColor} ${style.footerOne}`}
                                sx={{
                                    backgroundColor: 'var(--second-color-purple)',
                                    fontSize: '0.9rem',
                                    color: 'var(--letter-color)',
                                    mb: '1%',
                                }}
                            >
                                {dictionary?.nav_main?.footer.navc_brand}
                                {dictionary?.nav_main?.footer.comunity_veterinary}
                            </Item>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', sm: 'flex-end' },
                                gap: 5,
                            }}
                        >
                            <Link
                                href="https://www.youtube.com/channel/UCBBXdp5Wohtn9yuihiREkEg?view_as=subscriber"
                                target="_blank"
                            >
                                <YouTubeIcon
                                    className={style.hoverColor}
                                    sx={{ fontSize: 25, color: 'white' }}
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/the_lavc/?hl=es"
                                target="_blank"
                            >
                                <InstagramIcon
                                    className={style.hoverColor}
                                    sx={{ fontSize: 25, color: 'white' }}
                                />
                            </Link>
                            <Link
                                href="https://api.whatsapp.com/send?phone=51985174876"
                                target="_blank"
                            >
                                <WhatsAppIcon
                                    className={style.hoverColor}
                                    sx={{ fontSize: 25, color: 'white' }}
                                />
                            </Link>
                            <Link
                                href="https://www.facebook.com/conferencia.veterinaria.latinoamericana/"
                                target="_blank"
                            >
                                <FacebookIcon
                                    className={style.hoverColor}
                                    sx={{ fontSize: 25, color: 'white' }}
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </Box>
    )
}
