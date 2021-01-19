import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles((theme) => ({
  grid: {
    width: '95%',
    margin: '20px'
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
  },

}));



function Profile() {
  const classes = useStyles();
  return (
    <div>
      <div className="mt-4">
        <h2>Profile Page</h2>
      </div>
      
      <Grid container className={classes.grid} spacing={2} justify="flex-end">
        <Grid item xs={8}>
          <Paper className={classes.paper} >Bio</Paper>
        </Grid>
      </Grid>
      <br></br>
      <br></br>

      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container className={classes.grid} spacing={8} justify="center">
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={4}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt="placeholder"
            image="https://via.placeholder.com/150"
            />
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
    
  );
}
export default Profile;
