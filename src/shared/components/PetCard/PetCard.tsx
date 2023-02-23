import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Pet } from "../../models";
import { Box, Grid } from "@material-ui/core";
import PetAvatar from "../PetAvatar/PetAvatar";

const useStyles = makeStyles(()=> ({
  root: {
    margin: "0 auto",
    width: "100%",
    height:"100%",
    padding: 10,
  },
  pictureWrapper : {
    width: "100%",
    overflow:"hidden",
    borderRadius:5
  },
  image : {
    width: "100%",
    display:"block"
  },


}))

  interface PetProps {
    pet: Pet;
    onClick: (id: number) => void;
  }


const PetCard:FC<PetProps> = ({pet,onClick}) => {

  const classes = useStyles()


  return (
    <Box  className={classes.root}>
       <Box className={classes.pictureWrapper}>
         <img src={pet.image} alt={pet.name} className={classes.image}/>
       </Box>
    </Box>
  );
};

export default PetCard;
