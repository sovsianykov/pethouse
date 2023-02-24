import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { useAppSelector } from "../../app/hooks/useAppDispatch";
import PostItem from "../../../shared/components/PostItem/PostItem";

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
  return (
    <Grid item xs={6}>
      <Grid container className={classes.root}>
        {posts.map((post) => (
          <PostItem
            post={post}
            onDisLike={() => null}
            onLike={() => null}
            key={post.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default PostColumn;
