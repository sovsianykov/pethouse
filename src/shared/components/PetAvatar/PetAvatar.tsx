import React, { FC, memo } from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import { theme } from "../../../app/app/constants/theme";
import { pets } from "../../../fakeData/fakeData";



  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      boxShadow:"0 0 3px #000"

    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      boxShadow:"0 0 3px #000"
    },
  }));

interface Props {
  id: number
}


const PetAvatar:FC<Props> = ({id}) => {

  const classes = useStyles()
  const src = pets.find(p => p.id === id)!.image
  return (
    <Avatar src={src} className={classes.large}/>
  );
};

export default memo(PetAvatar);
