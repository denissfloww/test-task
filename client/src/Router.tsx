import { Route, Switch } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import {Container} from "@material-ui/core";


const Routes = () => {
    return (
        <Container>
            <Switch>
                <Route exact path='/'>
                    <MainPage />
                </Route>
            </Switch>
        </Container>
    );
};

export default Routes;