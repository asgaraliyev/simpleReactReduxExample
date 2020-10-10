import React, { Component, useState } from "react";
import addCommentAction from "../actions/index";
import { useDispatch } from "react-redux";
export default function AddComment() {
  const dispatch =useDispatch()
  const [username,setUsername]=useState("")
  const [comment,setComment]=useState("")
  const username_On_Change = (e) => {
    setUsername(e.target.value)
  };
  const comment_On_Change = (e) => {
   setComment(e.target.value)
  };
  const submit_Handler = () => {
    var info = {
      id: 1,
      username: username,
      comment: comment,
    };
    dispatch(addCommentAction(info))
  };
  return (
    <div id="add-comments">
      <input placeholder="Username" onChange={username_On_Change}></input>
      <br></br>
      <input placeholder="Your Comment" onChange={comment_On_Change}></input>
      <br></br>
      <input onClick={submit_Handler} type="button" value="Send"></input>
    </div>
  );
}
