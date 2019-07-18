import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../components/Card.css';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 300,
    marginLeft: 800
  }
});

class Card extends Component {
  render() {
    const { classes, backgroundColor } = this.props;
    const finalClasses = `${classes.root} ${backgroundColor}`;
    return (
      <Paper className={finalClasses}>
        <Typography variant="h5" component="h3">
          PATRICK BATEMAN
        </Typography>
        <Typography component="p">VICE PRESIDENT</Typography>
      </Paper>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default withStyles(styles)(Card);
