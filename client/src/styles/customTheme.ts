import { createTheme } from '@material-ui/core/styles';

const theme = (darkMode: boolean) =>
    createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            secondary: {
                main: darkMode ? '#ffffff' : '#000000',
            },
        },
    });

export default theme;
