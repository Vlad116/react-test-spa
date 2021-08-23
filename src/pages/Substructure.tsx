import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh'
    }
}))

export default function Substructures() {
    const classes = useStyles()

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Typography variant="body1" gutterBottom>
                Substructures page
            </Typography>
        </Grid>
    )
}
