import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import StarRateIcon from '@mui/icons-material/StarRate'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
import AnimatedBox from '../../Components/AnimatedBox'

function ActionAreaCard({
    image,
    title,
    body,
} : {
    image: string,
    title: string,
    body: string,
}) {
    return (
        <Card sx={{ width:345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="440"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

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

function VideoSection(): JSX.Element {
    const theme = useTheme()

    return (
        <Stack
            alignItems='center'
            height='calc(100vh - 5rem)'
            minHeight={{
                xs: '1200px',
                sm: '1200px',
                md: '1200px',
                lg: '700px',
            }}
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
                direction={{
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                }}
                width={{
                    xs: 'auto',
                    sm: 'auto',
                    md: 'auto',
                    lg: '100%',
                }}
                gap='9rem'
                justifyContent='space-between'
                maxWidth='1450px'
                minHeight='max-content'
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

function WelcomeSection(): JSX.Element {
    const theme = useTheme()

    return (
        <Stack
            position='relative'
            alignItems="center"
            justifyContent="center"
            sx={{
                width: '100%',
                minHeight: '700px',
                textAlign: 'center',
                backgroundColor: theme.palette.background.default, // Maintain existing background color
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply',
                backgroundImage: 'url("sea-ripple-texture.png")',
                pb: 16,
            }}
        >
            <AnimatedBox>
                <Stack
                    alignItems="center"
                    pt={16}
                    direction={{
                        xs: 'column',
                        sm: 'column',
                        md: 'column',
                        lg: 'row',
                    }}
                >
                    <Box
                        sx={{
                            width: '800px',
                            maxWidth: '100%',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: 'max-content',
                                maxWidth: '100%',
                                margin: 'auto',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    right: '20px',
                                    bottom: '-60px',
                                    width: '100vw',
                                    height: '70px',
                                    background: `linear-gradient(to right,
                                        rgba(245, 245, 245, 1) 75%,
                                        rgba(245, 245, 245, 0.3) 100%
                                    )`,
                                    mb: '40px',
                                }}
                            />
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    color: theme.palette.secondary.contrastText,
                                    width: 'max-content',
                                    maxWidth: '100%',
                                    margin: 'auto',
                                    position: 'relative',
                                }}
                                variant='h2'
                            >
                                Outboard Motors Ltd
                            </Typography>
                        </Box>

                        <Stack
                            justifyContent='center'
                            direction='row'
                            mt={4}
                        >
                            <StarRateIcon fontSize="large" />
                            <StarRateIcon fontSize="large" />
                            <StarRateIcon fontSize="large" />
                            <StarRateIcon fontSize="large" />
                            <StarRateIcon fontSize="large" />
                        </Stack>

                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: theme.palette.secondary.contrastText,
                                fontSize: '20px',
                                marginTop: '2rem',
                            }}
                            variant='body1'
                        >
                            Specialist outboard motor deals and repairs
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '400px',
                            height: '400px',
                        }}
                    >
                        <img
                            style={{
                                objectFit: 'cover'
                            }}
                            height='100%'
                            width='100%'
                            src='graphic.png'
                            alt='Graphic'
                        />

                    </Box>
                </Stack>
            </AnimatedBox>

            <AnimatedBox>
                <Box
                    sx={{
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            width: '100vw',
                            height: '10px',
                            background: `linear-gradient(to right,
                                ${alpha(theme.palette.primary.main, 1)} 55%,
                                ${alpha(theme.palette.primary.main, 0.0)} 90%
                            )`,
                            my: '40px'
                        }}
                    />
                </Box>

                <Stack
                    position='relative'
                    alignItems="center"
                    justifyContent="center"
                    direction='column'
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: theme.palette.secondary.contrastText,
                            marginTop: '2rem',
                        }}
                        variant='h2'
                    >
                        What We Do
                    </Typography>

                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row'
                        }}
                        justifyContent='center'
                        gap='1rem'
                        mt={4}
                    >
                        <ActionAreaCard
                            image='outboard-engine.jpg'
                            title='Servicing & Repairs'
                            body='Keep your outboard motor in top condition with our comprehensive servicing and repair solutions.'
                        />

                        <ActionAreaCard
                            image='xav-in-boat.jpg'
                            title='Collection & Delivery'
                            body='Enjoy hassle-free collection and delivery for your outboard motor.'
                        />

                        <ActionAreaCard
                            image='engine.png'
                            title='Specialist Services'
                            body='Benefit from our specialist services for performance enhancements and modifications.'
                        />
                    </Stack>
                </Stack>
            </AnimatedBox>
        </Stack>
    )
}

export default function Splash(): JSX.Element {
    return (
        <>
            <VideoSection />
            <WelcomeSection />
        </>
    );
}