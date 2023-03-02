import React, { memo, useCallback  } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useAppDispatch";
import PostItem from "../../../shared/components/PostItem/PostItem";
import { addDisLikes, addLikes } from "../../../store/ducks";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    border: " 1px solid green",
    borderRadius: 5,
  },
}));

const PostColumn = () => {
  const classes = useStyles();
  const { posts } = useAppSelector((state) => state.petsReducer);

  const dispatch = useAppDispatch();

  const onLikesHandler = useCallback((id:number) =>{
    dispatch(addLikes(id))
  },[dispatch])

  const onDisLikesHandler = useCallback((id:number) =>{
    dispatch(addDisLikes(id)!)
  },[dispatch])

  return (
    <Grid item xs={6}>
      <Grid container className={classes.root}>
        {posts.map((post) => (
          <PostItem
            post={post}
            onDisLike={onDisLikesHandler}
            onLike={onLikesHandler}
            key={post.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default memo(PostColumn);
