import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SelectControl extends React.Component {

    state = {
        value: ''
    };

    render() {
        const { classes } = this.props;
        const dataMap = this.initSelectValues();

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={this.props.id}>{this.props.inputLabel}</InputLabel>
                <Select
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputProps={{
                        name: this.props.name,
                        id: this.props.id,
                    }}>
                    <MenuItem value=''><em>None</em></MenuItem>
                    {dataMap}
                </Select>
            </FormControl>
        );
    };

    initSelectValues = () => {
        if (this.props.dataMap) return this.props.dataMap.map((entry, index) => <MenuItem key={index} value={entry.value}>{entry.label}</MenuItem>)
    } 

    handleChange = event => {
        const value = event.target.value;
        this.setState({ value });
    };
}

SelectControl.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SelectControl);
