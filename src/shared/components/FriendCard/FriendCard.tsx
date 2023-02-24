import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Pet } from "../../models";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(()=> ({
  root: {
    margin: "2px",
    width: "100%",
    height:"100%",
    padding: 1,
  },
  pictureWrapper : {
    width: "100%",
    height: 50,
    overflow:"hidden",
    borderRadius: 10
  },
  image : {
    width: "98%",
    height:"100%",
    display:"block",
    objectFit:"cover",
    cursor:"pointer",
    "&:hover" :{
      width: "100%"
    }
  },
  title: {
    fontSize:8,
    height:10,
    width:"1005",
    background:"#fff",
    borderRadius: 5,
  }
}))

interface PetProps {
  pet: Pet;
  onClick: (id: number) => void;
}


export  const FriendCard:FC<PetProps> = ({pet}) => {

  const classes = useStyles()
  return (
    <Box  className={classes.root}>
      <Typography variant="body2" className={classes.title} align='center' >
        {pet.name}
      </Typography>
      <Box className={classes.pictureWrapper}>
        <img src={pet.image} alt={pet.name} className={classes.image}/>
      </Box>
    </Box>
  );
};

