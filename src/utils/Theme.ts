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
            contrastText: '#000000'
        },
        background: {
            default: '#d2e3ff',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
})