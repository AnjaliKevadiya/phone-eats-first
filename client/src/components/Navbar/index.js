import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import API from "../utils/API";

//Logout functionality
function handleLogOutBtn(event) {
  event.preventDefault();
  handleLogOut(event);
}

function handleLogOut(event) {
  API.logout({
    email: {}
  })
  .then((res) => {
    console.log("Logged out!");
  })
  .catch((err) => console.log("logout error: ", err));
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            Phone Eats First
        </Typography>
        <Button variant="contained" color="primary" href="/home">
            Home
            </Button>
            <Button variant="contained" color="primary" href="/profile">
            Profile
        </Button>
        <Button onClick={handleLogOutBtn} variant="contained" color="primary" href="/signin">
            Log Out
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
