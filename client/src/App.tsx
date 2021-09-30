import './App.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/customTheme';
import { useBodyStyles } from './styles/muiStyles';
import Routes from "./Router";
import { autoLogin } from './services/authService';

const App = () => {
    const darkMode = false;
    const classes = useBodyStyles(darkMode)();
    useEffect(() => {
        autoLogin()
    }, []);

    return (
        <ThemeProvider theme={theme(darkMode)}>
            <div className={classes.root}>
                <Routes />
            </div>
        </ThemeProvider>
    );
};

export default App;
