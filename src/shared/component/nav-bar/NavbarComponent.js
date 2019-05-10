import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import NavbarComponentConstants from './NavbarComponent.const';

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
    return (
        <Grid item xs={NavbarComponentConstants.defaultSize}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Flight search</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </Grid>
    );
};

NavbarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavbarComponent);
