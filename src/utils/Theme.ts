import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
        primary: {
            main: '#46828d',
            light: '#75a9b6',
            contrastText: 'whitesmoke'
        },
        secondary: {
            main: '#d2e3ff',
            light: '#90c8d5',
            contrastText: '#082d31'
        },
        background: {
            default: '#d2e3ff',
            paper: '#ffffff',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Anton, sans-serif',
        },
        h2: {
            fontFamily: 'Anton, sans-serif',
            fontSize: '60px',
            fontWeight: '400',
        },
        h3: {
            fontFamily: 'Anton, sans-serif',
            fontSize: '40px',
            fontWeight: '400',
        },
        h4: {
            fontFamily: 'Anton, sans-serif',
        },
        h5: {
            fontFamily: 'Anton, sans-serif',
        },
        h6: {
            fontFamily: 'Anton, sans-serif',
        },
    },
})