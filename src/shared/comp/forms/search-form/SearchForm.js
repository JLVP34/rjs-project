import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import SearchFormConstants from './SearchForm.const';
import { Container } from 'react-bootstrap';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 300,
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

        return (
            <Grid item xs={SearchFormConstants.defaultSize}>
                <form className={classes.root} autoComplete="off">
                    <Container>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'age',
                            id: 'age-simple',
                            }}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </FormControl>
                    </Container>
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
