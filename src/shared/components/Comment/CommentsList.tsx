import React, { FC, memo } from "react";
import { Comment } from "../../models";
import { Grid, Typography } from "@material-ui/core";
import { CommentItem } from "./index";

interface CommentsListProps {
  comments:Comment[]
}


const CommentsList:FC<CommentsListProps> = ({comments}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant='subtitle1' align='right'>
          comments:
        </Typography>
      </Grid>
      {comments.map(comment =><Grid item xs={12} key={comment.description}>
        <CommentItem comment={comment}/>
      </Grid>)}
    </Grid>
  );
};

export default memo(CommentsList);
