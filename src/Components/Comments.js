import React, { Component } from "react";
import UlOfComments from "./UlOfComments";
import { useSelector } from "react-redux";

export default function Comments() {

  const comments = useSelector((state) => state)
  console.log(comments);
  return (
    <div id="comments">
      <UlOfComments comments={comments}></UlOfComments>
    </div>
  );
}
