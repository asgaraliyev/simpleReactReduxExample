const addCommentAction = (commentOfUser) => {
  return {
    type: "ADD_COMMENT",
    data: {
      username: commentOfUser.username,
      comment: commentOfUser.comment,
    },
  };
};
export const deleteCommentAction = (id) => {
  console.log(id);
  return {
    type: "DELETE_COMMENT",
    data: {
      id: id,
    },
  };
};
export default addCommentAction;
