"use client";

import Image from "next/image";

import { Grid, Box, Typography } from "@mui/material";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

import SectionTitle from "@/components/SectionTitle";

import type { getDictionary } from "@/utils/getDictionary";
import CustomButton from "@/components/ui/CustomButton";

interface Props {
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const OurEvent = ({  }: Props) => {
    const benefits = [
        { text: 'Más de 5500 participantes' },
        { text: 'Beneficios' },
        { text: 'Beneficios' },
        { text: 'Beneficios' },
        { text: 'Beneficios' },
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

                        <Box display="flex" flexDirection="column" gap={2} py={4}>
                            {benefits.map((b, i) => (
                                <Box key={`b-${i}`} display="flex" alignItems="center" gap={2}>
                                    <FaCheck style={{ color: "#f5c72c" }} />
                                    <Typography variant="body1">{b.text}</Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography variant="body1" fontSize="1.125rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error a saepe dolore voluptatum libero pariatur nisi, vero ducimus, sed natus! Accusamus quos saepe ducimus rerum quisquam esse quaerat sapiente.
                        </Typography>

                        <Box mt={10}>
                            <CustomButton                              
                                variant="contained"
                                className={`px-7 py-3 text-white flex items-center gap-2 text-lg font-bold `}
                            >
                                <span>Sobre nuestro evento</span>
                                <FaArrowRightLong size={14} />
                            </CustomButton>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    );
};

export default OurEvent;
