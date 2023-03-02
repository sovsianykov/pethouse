import React, { FC } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box } from "@material-ui/core";
import { Post } from "../../shared/models";
import { useAppDispatch } from "../../app/app/hooks/useAppDispatch";
import { addComment } from "../../store/ducks";

// interface ValidationSchema {
//   postId:number;
//   description:string;
//   author:string;
// }
interface Props {
  post:Post;
  author: string;
  onClick:() => void;
}


const validationSchema = yup.object({
  postId: yup
    .number(),
  description: yup
    .string()
    .min(8, 'Comment should be of minimum 8 characters length')
    .required('Comment is required'),
  author: yup
    .string()
});

export const NewComment:FC<Props>= ({post,author,onClick}) => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      postId: post.id,
      description: "",
      author: author
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onClick()
      dispatch(addComment(values))
    },
  });

  return (
    <Box m={2}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="new comment"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button color="primary" variant="text" fullWidth type="submit" >
          Submit
        </Button>
      </form>
    </Box>
  );
};
