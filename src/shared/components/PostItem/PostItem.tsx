import React, { FC } from "react";
import { Post } from "../../models";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid, IconButton,
  Typography
} from "@material-ui/core";
import { ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";

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

const PostItem: FC<PostProps> = ({ post }) => {
  const classes = useStyles();
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
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ color: "#fff" }}
          >
            Leave a comment
          </Button>
          <IconButton style={{ color:"orange"}}>
            <ThumbUpAltOutlined/>
          </IconButton>
          {post.likes}
          <IconButton style={{ color:"orange"}}>
            <ThumbDownAltOutlined/>
          </IconButton>
          {post.diLikes}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostItem;
