import React, { FC, memo, useCallback, useState } from "react";
import { Post } from "../../models";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent, Collapse, Divider,
  Grid, IconButton,
  Typography
} from "@material-ui/core";
import { ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useAppSelector } from "../../../app/app/hooks/useAppDispatch";
import { NewComment } from "../../../features/NewComment/NewComment";
import { CommentsList } from "../Comment";

interface PostProps {
  post: Post;
  onLike: (id: number) => void;
  onDisLike: (id: number) => void;
}

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
    width: "100%",
    minHeight: 300,
  },
  title: {
    marginTop: 10,
  },
  picWrapper: {
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    display: "block",
  },
}));

const PostItem: FC<PostProps> = ({ post,onLike,onDisLike }) => {
  const classes = useStyles();

  const { name } = useAppSelector(state => state.petsReducer.currentPet)

  const [ openNewComment, setOpenNewComment] = useState(false)

  const addLikesHandler = useCallback(() =>{
    onLike(post.id)
  },[onLike,post.id])

  const addDisLikesHandler = useCallback(() =>{
    onDisLike(post.id)
  },[onDisLike,post.id])

  const onOpenHandler = useCallback(() =>{
    setOpenNewComment(openNewComment => !openNewComment)
  },[])
  return (
    <Grid item md={12} className={classes.root}>
      <Card variant="outlined">
        <CardContent style={{paddingBottom:0}}>
          <Box className={classes.picWrapper}>
            <img src={post.image} alt={post.date} className={classes.image} />
          </Box>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {post.description}
          </Typography>
          <Divider/>
          <CommentsList comments={post.comments!}/>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ color: "#fff" }}
            onClick={onOpenHandler}
          >
            Leave a comment
          </Button>
          <IconButton style={{ color:"orange"}} onClick={addLikesHandler}>
            <ThumbUpAltOutlined/>
          </IconButton>
          {post.likes}
          <IconButton style={{ color:"orange"}} onClick={addDisLikesHandler}>
            <ThumbDownAltOutlined/>
          </IconButton>
          {post.diLikes}
        </CardActions>
        <Collapse in={openNewComment}>
          <NewComment post={post} author={name} onClick={() => setOpenNewComment(false)}/>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default memo(PostItem);
