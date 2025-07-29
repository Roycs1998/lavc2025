"use client";

import Image from "next/image";

import Link from "next/link";

import { Grid, Box, Typography } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

import SectionTitle from "@/components/SectionTitle";

import type { getDictionary } from "@/utils/getDictionary";

import CustomButton from "@/components/ui/CustomButton";

interface Props {
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const OurEvent = ({ }: Props) => {
    const benefits = [
        { text: '🎓 Charlas exclusivas con ponentes internacionales', description: 'Temas actualizados, casos clínicos reales y tendencias que marcarán el futuro de la profesión.' },
        { text: '🤝 Networking con miles de colegas y expertos', description: 'Intercambia experiencias, amplía tu red de contactos y fortalece la comunidad veterinaria.' },
        { text: '🧪 Zona comercial con más de 60 empresas', description: 'Explora lo último en productos, servicios e innovación para la medicina veterinaria. Desde equipamiento hasta farmacología, tecnología y más.' },
        { text: '🌎 Evento 100% especializado', description: 'A diferencia de otros congresos, el LAVC está diseñado exclusivamente para médicos veterinarios. Aquí cada charla, stand y actividad tiene un solo objetivo: mejorar tu práctica profesional.' },
    ];

    return (
        <Box bgcolor="#ebeff3" color="text.primary" className="md:py-20">
            <Box maxWidth="lg" mx="auto" px={{ xs: 6, md: 0, lg: 0 }}>
                <Grid container spacing={4}>
                    {/* Left side */}
                    <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
                        <Grid container spacing={2}>
                            {["/images/banners/1.jpg", "/images/banners/3.jpg", "/images/banners/2.jpg", "/images/banners/1.jpg"].map(
                                (src, index) => (
                                    <Grid item xs={6} key={index}>
                                        <Box overflow="hidden">
                                            <Image
                                                src={src}
                                                alt={`Image ${index + 1}`}
                                                className="object-cover"
                                                width={300}
                                                height={250}
                                                loading="lazy"
                                            />
                                        </Box>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
                        <SectionTitle
                            title={'Estos son algunos de los beneficios que te ofrecemos'}
                            subTitle={'¿Por qué ir al LAVC?'}
                            showIcon={false}
                        />
                        <Box display="flex" flexDirection="column" gap={4} py={3}>
                            {benefits.map((b, i) => (
                                <Box key={`b-${i}`} display="flex" flexDirection="column" alignItems="left" gap={1}>
                                    <Typography variant="body1" >{b.text}</Typography>
                                    <Typography variant="body1" className="text-justify">{b.description}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Link href="/nosotros" passHref>
                            <CustomButton
                                variant="contained"
                                className="px-7 py-3 text-white flex items-center gap-2 text-lg font-bold"
                            >
                                <span>Sobre nuestro evento</span>
                                <FaArrowRightLong size={14} />
                            </CustomButton>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default OurEvent;
