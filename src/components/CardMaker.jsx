import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Card from './Card';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  root: {
    flexWrap: 'nowrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

const CardMaker = props => {
  const [color, setColor] = useState('bone');
  const [font, setFont] = useState('silianRail');

  const { classes } = props;

  const colorOnChange = event => {
    setColor(event.target.value);
  };

  return (
    <div>
      <div>
        <Typography variant="h3" gutterBottom>
          American Psycho Business Card Maker
        </Typography>
      </div>
      <div style={{ marginBottom: 10 }}>
        <form className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="color">Color</InputLabel>
            <Select
              value={color}
              inputProps={{
                name: 'color',
                id: 'background-color'
              }}
              onChange={colorOnChange}
            >
              <MenuItem value="bone">Bone</MenuItem>
              <MenuItem value="eggShell">Egg Shell</MenuItem>
              <MenuItem value="paleNimbus">Pale Nimbus</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
      <div style={{ marginBottom: 20 }}>
        <form className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="font">Font</InputLabel>
            <Select
              value={1}
              inputProps={{
                name: 'font',
                id: 'font'
              }}
            >
              <MenuItem value={1}>Silian Rail</MenuItem>
              <MenuItem value={2}>Romalian Type</MenuItem>
              <MenuItem value={3}>Raised Lettering</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
      <div>
        <Card backgroundColor={color} />
      </div>
    </div>
  );
};

CardMaker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardMaker);
