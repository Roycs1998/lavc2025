import { Box, Grid, Typography } from '@mui/material'

import { CardImage } from '@/components/components-home/components-ponentes/CardImage'

import SectionTitle from '@/components/SectionTitle'

import { Huellas } from '@/components/ui/Huellas'

const YOUTUBE_URL = 'https://www.youtube.com/embed/cUkef4TgAes?si=r5-2tkEyNqRM4_H3'

const YOUTUBE_URL2 = 'https://www.youtube.com/embed/30dN0ZIRTTs?si=5GR-VMQ6XeCJ7WXj'

const YOUTUBE_URL3 = 'https://www.youtube.com/embed/XhK4AfIqdGE?si=LdHyafBGR--zZB8P'

const Videos = async () => {
    return (
        <>
            <CardImage
                image='https://cdn.pixabay.com/photo/2017/06/16/05/11/white-tiger-2407799_1280.jpg'
                title='Videos LAVC'
            />

            <Box bgcolor="#f5c72c" color="text.primary" className="md:py-20 py-10 relative">
                <Huellas
                    position={{ top: '-100px', left: '40px' }}
                    rotateDeg={30}
                    tipoHuellas="pato"
                    color="#fff"
                    opacity={0.7}
                />

                <Box maxWidth="lg" mx="auto" px={{ xs: 6, md: 0, lg: 0 }}>
                    <Grid container spacing={4}>
                        {/* COLUMNA IZQUIERDA: TEXTO */}
                        <Grid item xs={12} lg={6}>
                            <SectionTitle
                                title={<span className="text-[#3a3480]">El Dr. Mader te invita a ser partícipe del LAVC 2026</span>}
                                subTitle={
                                    <span className="text-[#ffffff]">
                                        Conferencistas de renombre internacional
                                    </span>
                                }
                                showIcon={false}
                                lineaColor="3a3480"
                            />

                            <Box display="flex" flexDirection="column" gap={2} py={4}>
                                {/* Aquí puedes agregar bullets o texto extra si quieres */}
                            </Box>

                            <Typography
                                zIndex={1}
                                className="z-2"
                                variant="body1"
                                fontSize="1.125rem"
                            >
                                Disfruta de las conferencias y presentaciones de expertos en el campo, compartiendo sus conocimientos y experiencias para enriquecer tu aprendizaje.
                            </Typography>

                            <Box mt={10} display="flex" flexDirection="column" gap={2}>
                                {/* Más contenido si lo necesitas */}
                            </Box>
                        </Grid>

                        {/* COLUMNA DERECHA: VIDEO */}
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    width: '100%',

                                    position: 'relative',
                                    pt: { xs: '56.25%', sm: '56.25%', md: '56.25%' }, // 16/9 = 56.25%
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: 4,
                                    zIndex: 1,
                                }}
                            >
                                <Box
                                    component="iframe"
                                    src={YOUTUBE_URL}
                                    title="Video LAVC 2025"
                                    loading="lazy" // 👈 LAZY LOAD
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    sx={{
                                        border: 0,
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box maxWidth="lg" mx="auto" pt={10} px={{ xs: 6, md: 0, lg: 0 }}>
                    <Grid container spacing={4}>
                        {/* COLUMNA IZQUIERDA: TEXTO */}
                        <Grid item xs={12} lg={6}>
                            <SectionTitle
                                title={<span className="text-[#3a3480]">¡Así fue el LAVC 2025!</span>}
                                subTitle={
                                    <span className="text-[#ffffff]">
                                        Charlas, Sorteos, Encuentros inolvidables
                                    </span>
                                }
                                showIcon={false}
                                lineaColor="3a3480"
                            />

                            <Box display="flex" flexDirection="column" gap={2} py={4}>
                                {/* Aquí puedes agregar bullets o texto extra si quieres */}
                            </Box>

                            <Typography
                                zIndex={1}
                                className="z-2"
                                variant="body1"
                                fontSize="1.125rem"
                            >
                                Revive los mejores momentos del LAVC 2025 a través de este video resumen que captura la esencia del evento, desde las conferencias hasta los momentos de camaradería entre los asistentes.
                            </Typography>

                            <Box mt={10} display="flex" flexDirection="column" gap={2}>
                                {/* Más contenido si lo necesitas */}
                            </Box>
                        </Grid>

                        {/* COLUMNA DERECHA: VIDEO */}
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    width: '100%',

                                    position: 'relative',
                                    pt: { xs: '56.25%', sm: '56.25%', md: '56.25%' }, // 16/9 = 56.25%
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: 4,
                                    zIndex: 1,
                                }}
                            >
                                <Box
                                    component="iframe"
                                    src={YOUTUBE_URL2}
                                    title="Video LAVC 2025"
                                    loading="lazy" // 👈 LAZY LOAD
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    sx={{
                                        border: 0,
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box maxWidth="lg" mx="auto" pt={10} px={{ xs: 6, md: 0, lg: 0 }}>
                    <Grid container spacing={4}>
                        {/* COLUMNA IZQUIERDA: TEXTO */}
                        <Grid item xs={12} lg={6}>
                            <SectionTitle
                                title={<span className="text-[#3a3480]"> La Dra. Nicole Martell te invita a ser partícipe del LAVC 2026</span>}
                                subTitle={
                                    <span className="text-[#ffffff]">
                                        Conferencistas de renombre mundial
                                    </span>
                                }
                                showIcon={false}
                                lineaColor="3a3480"
                            />

                            <Box display="flex" flexDirection="column" gap={2} py={4}>
                                {/* Aquí puedes agregar bullets o texto extra si quieres */}
                            </Box>

                            <Typography
                                zIndex={1}
                                className="z-2"
                                variant="body1"
                                fontSize="1.125rem"
                            >
                                Aprende con los mejores expertos en el mundo de la veterinaria y actualiza tus conocimientos.
                            </Typography>

                            <Box mt={10} display="flex" flexDirection="column" gap={2}>
                                {/* Más contenido si lo necesitas */}
                            </Box>
                        </Grid>

                        {/* COLUMNA DERECHA: VIDEO */}
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    width: '100%',

                                    position: 'relative',
                                    pt: { xs: '56.25%', sm: '56.25%', md: '56.25%' }, // 16/9 = 56.25%
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: 4,
                                    zIndex: 1,
                                }}
                            >
                                <Box
                                    component="iframe"
                                    src={YOUTUBE_URL3}
                                    title="Video LAVC 2026"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    sx={{
                                        border: 0,
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Videos
