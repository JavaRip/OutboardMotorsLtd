import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import useTheme from '@mui/material/styles/useTheme'

function SplashActionButton({
    color,
    text,
    iconHref,
}: {
    color: string,
    text: string,
    iconHref: string,
}): JSX.Element {
    const theme = useTheme()

    return (
        <Box
            sx={{
                opacity: 0.7,
                position: 'relative',
                height: '230px', // Outer circle size
                aspectRatio: '1/1',
                borderRadius: '50%',
                backgroundColor: 'transparent', // Outer circle background (transparent)
                cursor: 'pointer',
                border: `10px solid ${color}`, // Static outer border
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '190px', // Inner circle initial size
                    height: '190px',
                    borderRadius: '50%',
                    backgroundColor: color, // Inner circle color
                    transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
                },
                '&:hover': {
                    '&::before': {
                        width: '230px', // Expands inner circle size
                        height: '230px',
                    },
                },
            }}
        >
            <img
                src={iconHref}
                alt={text}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                }}
            />
            <Typography
                sx={{
                    position: 'absolute',
                    bottom: '-70px',
                    left: '50%',
                    transform: 'translatex(-50%)',
                    width: 'max-content',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: theme.palette.primary.contrastText,
                }}
                variant='h4'
            >
                {text}
            </Typography>
        </Box>
    );
}

export default function Splash(): JSX.Element {
    const theme = useTheme()
    return (
        <Stack
            alignItems='center'
            height='calc(100vh - 5rem)'
            minHeight='700px'
            justifyContent='center'
            position='relative'
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src='boat_drone_footage.mp4' type='video/mp4' />
                </video>
            </Box>

            <Stack
                direction='row'
                gap='1rem'
                justifyContent='space-between'
                width='100%'
                maxWidth='1450px'
                position='absolute'
                bottom='100px'
                p={4}
            >
                <SplashActionButton
                    color={theme.palette.primary.light}
                    iconHref='logo-no-text.png'
                    text='Servicing & Repairs'
                />
                <SplashActionButton
                    color={theme.palette.primary.light}
                    iconHref='circle-icon.png'
                    text='Collection & Delivery'
                />
                <SplashActionButton
                    color={theme.palette.primary.light}
                    iconHref='obm.png'
                    text='Outboard Specialist'
                />
            </Stack>
        </Stack>
    );
}