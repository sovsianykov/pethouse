import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import PetCard from "../../../shared/components/PetCard/PetCard";
import PetAvatar from "../../../shared/components/PetAvatar/PetAvatar";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useAppDispatch";
import { setCurrentPet } from "../../../store/ducks";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    border: " 1px solid green",
    borderRadius: 5,
  },
  avatarsBlock: {
    display: "flex",
    margin: "5px auto",
    width: "90%",
    height: 60,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-around",
  },
  name: {
    margin: "8px auto 0 10px",
    color: "#64210a",
    fontFamily:"Rubic,sans-serif"
  },
  name2: {
    margin: "0px auto 0 10px",
    color: "#64210a",
    fontFamily:"Rubic,sans-serif"
  },
  name3: {
    fontSize:10,
    margin: "0px auto 0 auto",
    color: "#7c2000",
    fontFamily:"Rubic,sans-serif",
    padding: "0 10px"
  }
}));

const LeftColumn = () => {
  const classes = useStyles();
  const { currentPet } = useAppSelector((state) => state.petsReducer);
   const dispatch = useAppDispatch()
  const onClickHandler = useCallback((id: number) => {
    dispatch(setCurrentPet(id))
  }, [dispatch]);
  return (
    <Grid item xs={3}>
      <Grid
        container
        className={classes.root}
        direction="column"
        justifyContent="flex-start"
      > <Typography variant='h5' className={classes.name}>
        {currentPet.name}
      </Typography>
        <PetCard pet={currentPet} onClick={() => null} />
        <Typography variant='subtitle1' className={classes.name2}>
          {`${currentPet.name}'s family: `}
        </Typography>
        <Grid item className={classes.avatarsBlock}>
          {currentPet.friendsId!.map((id) => (
            <div onClick={() => onClickHandler(id)} key={id}>
              <PetAvatar  id={id} />
            </div>
          ))}
        </Grid>
        <Typography variant='subtitle2' className={classes.name2}>
          {`about ${currentPet.name} :`}
        </Typography>
        <Typography variant='body1' className={classes.name3}>
          {currentPet.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LeftColumn;
