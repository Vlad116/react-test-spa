import React from 'react'
import SignIn from '../pages/SignIn'
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
            {/* <Switch> */}
            {/* <Route exact path="/" component={noRequireAuth(HomePage)} />
                <Route path='/login' component={noRequireAuth(Login)} />
                <Route path='/parking_reserve' component={noRequireAuth(ParkingReserve)} />
                <Route path='/register' component={noRequireAuth(Register)} />
                <Route path='/signout' component={noRequireAuth(Signout)} />
                <Route component={NotFoundPage} /> */}
            {/* </Switch> */}
        </Grid>
    )
}

export default App
