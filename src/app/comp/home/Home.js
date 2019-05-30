import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Jumbotron, Button } from 'react-bootstrap';

import SearchForm from '../../../shared/comp/forms/search-form/SearchForm';

const styles = theme => ({});

class Home extends React.Component {
    render() { 
        return (
            <Grid container className="m-3">
                <Grid item xs={12}>
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                            <p>This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                            <p><Button variant="primary">Learn more</Button></p>
                    </Jumbotron>
                </Grid>
                <SearchForm/>
            </Grid>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);
  