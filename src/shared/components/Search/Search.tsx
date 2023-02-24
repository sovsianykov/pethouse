/* eslint-disable no-use-before-define */
import React, { useCallback, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import { useAppDispatch } from "../../../app/app/hooks/useAppDispatch";
import { setSearchQuery } from "../../../store/ducks";

export const Search = () => {
  const dispatch = useAppDispatch()
  const [ name , setName] = useState('')
  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.target.value)
  },[])
  const onSubmitHandler = useCallback((e) =>{
    e.preventDefault()
  },[dispatch,name])
  useEffect(() => {
    dispatch(setSearchQuery(name))
  },[dispatch,name])
  return (
    <Box style={{ width: "100%" ,height:40}}>
      <form onSubmit={onSubmitHandler}>
          <TextField
            onChange={onChangeHandler}
            label="friends search"
            margin="dense"
            variant="outlined"
            style={{ outlineColor: "green",color:"green" }}
          />
      </form>
    </Box>
  );
};
