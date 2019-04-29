import React from 'react';
import PropTypes from 'prop-types';
import NavbarComponentConstants from './NavbarComponent.const';
import Navbar from 'react-bootstrap/Navbar';
import Trans from 'i18next';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function NavbarComponent(props) {
    const { classes } = props;

    return (
        <Grid container spacing={NavbarComponentConstants.maxGridSize}>
            <Grid item xs={12}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>
    );
};

NavbarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavbarComponent);
