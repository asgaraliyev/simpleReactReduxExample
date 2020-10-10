import React, { Component } from "react";
import { useDispatch } from "react-redux";
import {deleteCommentAction} from '../actions/index'
export default function UlOfComments(props) {
  const dispatch = useDispatch();
  const { comments } = props;
  const willDelete = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    dispatch(deleteCommentAction(id))
  };
  return (
    <ul>
      {comments.map((message) => {
        return (
          <li key={message.id}>
            <input
              data-id={message.id}
              type="button"
              value="Delete"
              onClick={willDelete}
            ></input>
            <br></br>
            <h3>{message.username}</h3>
            <br></br>
            <p>{message.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
