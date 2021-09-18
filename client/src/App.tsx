import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/customTheme';
import { useBodyStyles } from './styles/muiStyles';
import Routes from "./Router";

const App = () => {
    const darkMode = false;
    const classes = useBodyStyles(darkMode)();

    return (
        <ThemeProvider theme={theme(darkMode)}>
            <div className={classes.root}>
                <Routes />
            </div>
        </ThemeProvider>
    );
};

export default App;
