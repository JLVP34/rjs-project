import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// import SearchFormConstants from './SearchForm.const';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SelectControl from '../controls/select/SelectControl';

const styles = theme => ({
    formControl: {
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SearchForm extends React.Component {

    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
    };

    render() {
        const { classes } = this.props;
        const dataMap = [
            {label: 'Ten', value: 10},
            {label: 'Twenty', value: 20},
            {label: 'Thirty', value: 30},
        ];
        const dataMapC = [
            {label: 'One', value: 1},
            {label: 'Two', value: 2},
            {label: 'Three', value: 3},
        ];

        return (
            <Grid item xs className="mb-3">
                <form className={classes.root} autoComplete='off'>
                    <Card bg="light">
                        <Card.Header>Contact</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <SelectControl 
                                            id='age-1' 
                                            name='age'
                                            inputLabel='Age'
                                            dataMap={dataMap}/>
                                    </Col>
                                    <Col>
                                        <SelectControl 
                                            id='cat-1' 
                                            name='cat'
                                            inputLabel='Category'
                                            dataMap={dataMapC}/>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </form>
            </Grid>
        );
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchForm);
