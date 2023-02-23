import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from "@material-ui/core";
import PetCard from "../../../shared/components/PetCard/PetCard";
import { pets } from "../../../fakeData/fakeData";
import PetAvatar from "../../../shared/components/PetAvatar/PetAvatar";

const useStyles = makeStyles(()=> ({
  root: {
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    border: " 1px solid green",
    borderRadius: 5
  },
  avatarsBlock: {
    display:"flex",
    marginTop: "5px auto 0 auto",
    width:"90%",
    height: 60,
    borderRadius: 7,
    alignItems:"center",
    justifyContent:"space-around",
  }
}))


const LeftColumn = () => {
 const classes = useStyles()

  return (
    <Grid item md={3}>
      <Grid container   className={classes.root} direction='column' justifyContent='flex-start' >
        <PetCard pet={pets[0]} onClick={() => null}/>
        <Grid item  className={classes.avatarsBlock}>
          {pets[0].friendsId!.map(id => <PetAvatar key={id} id={id}/>)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftColumn;


