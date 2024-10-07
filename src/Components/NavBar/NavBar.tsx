import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TextLink({ children }: { children: string }): JSX.Element {
    return (
        <Typography
            sx={{
                position: 'relative',
                display: 'inline-block',
                color: 'white',
                cursor: 'pointer',
                textDecoration: 'none',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    bottom: '-4px',
                    left: 0,
                    transform: 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                    transform: 'scaleX(1)',
                },
            }}
            variant='h5'
        >
            {children}
        </Typography>
    );
}

export default function NavBar(): JSX.Element {
    return (
        <AppBar sx={{ height: '5rem' }} position='static'>
            <Stack
                alignItems='center'
                direction='row'
                justifyContent='space-between'
                margin='auto'
                maxWidth='80em'
                paddingLeft='2rem'
                paddingRight='2rem'
                width='100%'
            >
                <Stack
                    alignItems='center'
                    direction='row'
                    gap='4rem'
                    justifyContent='space-between'
                    width='100%'
                >
                    <TextLink>Home</TextLink>
                    <TextLink>Services</TextLink>

                    <Box sx={{ cursor: 'pointer' }}>
                        <img
                            alt='logo'
                            src='logo-no-text.png'
                            style={{
                                height: '4rem',
                                filter: 'invert(99%) sepia(24%) saturate(49%) hue-rotate(206deg) brightness(114%) contrast(92%)',
                            }}
                        />
                    </Box>

                    <TextLink>About</TextLink>
                    <TextLink>Contact</TextLink>
                </Stack>
            </Stack>
        </AppBar>
    );
}