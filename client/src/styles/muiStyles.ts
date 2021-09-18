import { makeStyles } from '@material-ui/core/styles';

export const useBodyStyles = (darkMode: boolean) =>
    makeStyles(
        () => ({
            root: {
                backgroundColor: darkMode ? '#000000' : '#ffffff',
                width: '100vW',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                minHeight: '100vH',
            },
        }),
        { index: 1 },
    );

export const useMainPageStyles = makeStyles(
    theme => ({
        root: {
            padding: '1em 0',
            [theme.breakpoints.down('xs')]: {
                padding: '0.5em 0.5em',
            },
        },
            mainPagePaper:{
                fontFamily: 'Nunito',
                padding: '1.5em',
                minHeight: 'calc(100vH - 130px)',
                [theme.breakpoints.down('xs')]: {
                    padding: '0.5em 0.7em',
                    minHeight: 'calc(100vH - 80px)',
                },
            },
    }
    )
);