import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(()=> ({
  root: {
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    border: " 1px solid green",
    borderRadius: 5
  }
}))


const RightColumn = () => {
  const classes = useStyles()

  return (
    <Grid item md={3}>
    <Grid container className={classes.root}>


    </Grid>

    </Grid>
);
};

export default RightColumn;


