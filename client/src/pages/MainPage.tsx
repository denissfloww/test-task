import {useMainPageStyles} from "../styles/muiStyles";
import {Paper} from "@material-ui/core";

const MainPage = () => {
    const classes = useMainPageStyles();

    return(
        <div className={classes.root}>
            <Paper className={classes.mainPagePaper}>
                gg
            </Paper>
        </div>
    )
}

export default MainPage