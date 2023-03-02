import React, { FC, memo } from "react";
import { Box, Typography } from "@material-ui/core";
import { Comment } from "../../models";
import { makeStyles } from "@material-ui/styles";
interface CommentProps {
  comment:Comment;
}

const useStyles = makeStyles(() => ({
  root: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    borderRadius: 5,
    border:"1px solid #ccc",
    padding: 5,
    background: "#f0f0f1"
  },

  content : {
    fontSize: 12,
    fontWeight: 300
  }
}))

const CommentItem:FC<CommentProps> = ({comment}) => {

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant='body1' color="textSecondary" className={classes.content}>
        { comment.description }
      </Typography>
      <Typography variant='body2' color="textPrimary"  className={classes.content} >
        {`author: ${comment.author}`}
      </Typography>
    </Box>
  );
};

export default memo(CommentItem);
