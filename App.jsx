import { ThemeProvider } from '@emotion/react';
import { Typography, Stack, Card, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import StarRateIcon from '@mui/icons-material/StarRate';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState, useEffect, useRef } from 'react';
import { Star } from '@mui/icons-material';

const theme = createTheme({
    pallette: {
        primary: {
            main: '#1a237e',
        },
    },
    typography: {
        fontFamily: '"Open Sans", sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 400,
        }
    }

})

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ background: 'skyblue', height: '100dvh', width: '100dvw' }}>
                <Box height='100%'>
                    <Stack
                        maxWidth='80rem'
                        height='100%'
                        alignItems='center'
                        justifyContent='center'
                        margin='0 auto'
                        gap={4}
                        sx={{
                            flexDirection: {
                                sm: 'column',
                                md: 'row',
                            }
                        }}
                    >
                        <Stack
                            mt={4}
                            mb={2}
                            alignContent='center'
                            sx={{
                                width: {
                                    sm: '100%',
                                    md: '50%',
                                }
                            }}
                        >
                            <Typography textAlign='center' variant='h1'>
                                Outboard Motors Ltd
                            </Typography>

                            <Box width='30rem' margin='0 auto'>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '40rem',
                                        p: 2,
                                    }}
                                >
                                    <Typography variant='h5' mb={1} mt={1} textAlign='center'>
                                        Top rated outboard motor deals and repairs
                                    </Typography>
                                    <Stack justifyContent='center' direction='row'>
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                    </Stack>
                                </Box>
                            </Box>

                            <Box margin="0 auto" mt={2}>
                                <Stack mb={1} gap={2} direction="row">
                                    <LocalPhoneIcon />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '1.0rem', sm: '1.5rem' }
                                        }}
                                    >
                                        (+44) 0712345678
                                    </Typography>
                                </Stack>
                                <Stack mb={1} gap={2} direction="row">
                                    <EmailIcon />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '1.0rem', sm: '1.5rem' }
                                        }}
                                    >
                                        info@outboardmotorsltd.com
                                    </Typography>
                                </Stack>
                                <Stack mb={1} gap={2} direction="row">
                                    <LanguageIcon />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '1.0rem', sm: '1.5rem' }
                                        }}
                                    >
                                        <a href='https://linktr.ee/outboardmotorsltd'>
                                            Linktree
                                        </a>
                                    </Typography>
                                </Stack>
                            </Box>

                        </Stack>

                        <Card
                            sx={{
                                boxShadow: 'none',
                                width: {
                                    xs: '100%',
                                    sm: '100%',
                                    md: '50%',
                                },
                                marginTop: {
                                    sm: '1rem',
                                    md: '4rem',
                                },
                                background: 'skyblue',
                                alignSelf: 'flex-end',
                                height: '80%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img src='/outboard_engine.jpg' alt='placeholder' />

                        </Card>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ background: 'lightgray', height: '100dvh' }}>
                <Stack
                    direction={{
                        sm: 'column',
                        md: 'row',
                    }}
                    sx={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                    }}
                    pb={4}
                >
                    <Box
                        height={340}
                        minHeight={340}
                        width={340}
                        minWidth={340}
                        borderRadius='100%'
                        overflow='hidden'
                        mt={4}
                        ml={4}
                        mr={4}
                        sx={{
                            display: 'flex',
                            alignContent: 'center',
                        }}
                    >

                        <img src='/xav_in_boat.jpg' alt='placeholder' />
                    </Box>
                    <Box
                        height={340}
                        width={340}
                        sx={{
                            width: '100%',
                            maxWidth: '40rem',
                            p: 2,
                            mt: {
                                sm: 0,
                                // md: 20,
                            }
                        }}
                    >
                        <Stack
                            justifyContent='flex-start'
                            width='max-content'
                            height={125}
                            sx={{
                                margin: {
                                    xs: '0 auto',
                                    sm: '0 auto',
                                    md: '0',
                                }
                            }}
                        >
                            <Stack mb={1} gap={2} direction='row'>
                                <FacebookIcon />
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    <a
                                        href='https://www.facebook.com/people/Outboard-Motors-Ltd/61560857936537/'
                                    >Facebook</a>
                                </Typography>
                            </Stack>
                            <Stack mb={1} gap={2} direction="row">
                                <InstagramIcon />
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    <a
                                        href='https://www.instagram.com/outboard_motors_ltd?igsh=dTh1Y3gybG81ZGVl&utm_source=qr'
                                    >Instagram</a>
                                </Typography>
                            </Stack>
                            <Stack mb={1} gap={2} direction="row">
                                <svg width={25}>
                                    <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path>
                                </svg>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    <a
                                        href='https://linktr.ee/outboardmotorsltd'
                                    >Linktree</a>
                                </Typography>
                            </Stack>
                        </Stack>

                        <Box
                            width={480}
                            margin='0 auto'
                            sx={{
                                margin: {
                                    sm: '0 auto',
                                    md: '0',
                                }
                            }}
                        >
                            <Typography
                                variant='body1'
                                margin='0 auto'
                                mb={2}
                            >
                                Xavier is a skilled marine mechanic specialising in repair and
                                maintaining two-stroke outboard engines. Dedicated to his craft
                                ensuring every boat worked on runs smoothly and reliably.
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • Servicing
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • No spark diagnostic
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • Low compression
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • Rebuilds
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • Outboard Sales
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • No start fix
                            </Typography>

                            <Typography variant='body1' width='max-content'>
                                • Health check
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </ThemeProvider>
    )
}