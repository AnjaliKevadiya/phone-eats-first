import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: "50px",
      marginLeft: "25rem",
      width: '25ch',
      justifyContent: "center",
      textAlign: "center"
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
      <div>
        <h1>Phone Eats Frist!</h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email" />
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password" />
          <Button variant="contained" color="primary" href="/home">
    Sign In
  </Button>
  <Button variant="contained" color="primary" href="/home">
    Sign in With Facebook
  </Button><Button variant="contained" color="primary" href="/home">
    Sign in With Google
  </Button>
    </form>
  </div>
  );
}