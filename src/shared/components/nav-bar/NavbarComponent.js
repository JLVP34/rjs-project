import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
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

function NavbarComponent() {
    return (
        <Grid item xs={NavbarComponentConstants.defaultSize}>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Flight search</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/search">
                            <Nav.Link>Search</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Grid>
    );
};

NavbarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavbarComponent);
