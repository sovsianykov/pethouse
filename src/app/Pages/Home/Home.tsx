import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid } from "@material-ui/core";
import LeftColumn from "./LeftColumn";
import PostColumn from "./PostColumn";
import RightColumn from "./RightColumn";

const useStyles = makeStyles(()=> ({
  root: {
    margin: "0 auto",
    maxWidth: "95%",
    marginTop: 85
  }

}))


const Home = () => {
  const classes = useStyles()
  return (
    <Container >
      <Grid container className={classes.root} spacing={2} >
        <LeftColumn/>
        <PostColumn/>
        <RightColumn/>
      </Grid>
    </Container>
  );
};

export default Home;
