import React from 'react'
import SignIn from '../pages/SignIn'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute'
import Login from '../pages/SignIn'
import Projects from '../pages/Projects'
import Structures from '../pages/Structures'
import Substructure from '../pages/Substructure'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh'
    }
}))

const App = (): JSX.Element => {
    // const authenticated = useSelector(state => state.get('auth').get('authenticated'))
    // let navbar
    // console.log(authenticated)
    // if (authenticated){
    //     navbar = <Navbar />
    // }
    const styles = useStyles()

    return (
        <Grid container component="main" className={styles.root}>
            <SignIn />
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Projects} />
                <ProtectedRoute path="/projects" component={Projects} />
                <ProtectedRoute path="/structures" component={Structures} />
                <ProtectedRoute path="/substructure" component={Substructure} />
            </Switch>
        </Grid>
    )
}

export default App
