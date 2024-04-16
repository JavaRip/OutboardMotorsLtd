import { ThemeProvider } from '@emotion/react';
import { Typography, Stack, Card, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

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
            <Box sx={{ background: 'skyblue', height: '100dvh', width: '100dvw'}}>
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
                            margin={4}
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

                            <Typography mt={4} textAlign='center' variant='h2'>
                                Getting you back on the water
                            </Typography>

                            <Box margin='2rem auto'>
                                <Stack mb={1} gap={2} direction='row'>
                                    <LocalPhoneIcon />
                                    <Typography variant='h3'>
                                        (+44) 0712345678
                                    </Typography>
                                </Stack>
                                <Stack mb={1} gap={2} direction='row'>
                                    <EmailIcon />
                                    <Typography variant='h3'>
                                        xavswartz@placeholder.com
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>

                        <Card
                            raised={true}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: '100%',
                                    md: '50%',
                                },
                                marginTop: {
                                    sm: '1rem',
                                    md: '4rem',
                                },
                                alignSelf: 'flex-end',
                                height: '80%',
                            }}

                        >

                            <img src='/engine.png' alt='placeholder' />

                        </Card>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ background: 'lightgray', height: '100dvh'}}>
                <Stack>
                    <Box></Box>
                    <Card></Card>
                </Stack>
            </Box>
        </ThemeProvider>
    )
}