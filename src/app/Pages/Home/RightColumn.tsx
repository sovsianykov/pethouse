import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Search } from "../../../shared/components/Search/Search";
import { FriendCard } from "../../../shared/components/FriendCard/FriendCard";
import { useAppSelector } from "../../app/hooks/useAppDispatch";
import { searchedFriendsSelector } from "../../../store/selectors";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    border: " 1px solid green",
    borderRadius: 5,
  },
}));

const RightColumn = () => {
  const classes = useStyles();
  const { searchedPets } = useAppSelector(searchedFriendsSelector)
  return (
    <Grid item xs={3}>
      <Grid container className={classes.root}  direction={"column"} justifyContent="flex-start">
        <Grid item xs md={12}  style={{ padding:"0 5px"}}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <Grid container style={{ marginTop: 10, padding:"0 5px"}}>
          {searchedPets.map(p => <Grid item   key={p.id} xs={4}>
            <FriendCard pet={p} onClick={()=> null}/>
          </Grid>)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RightColumn;
