const { act } = require("react-dom/test-utils");

const initialState = [
  { username: "Asgar Aliyev", comment: "my Comment is here" ,id:0},
];
const addCommentReducer = (state = initialState, action) => {
  if (action.type == "ADD_COMMENT") {
    const lastId = state.length ? state[state.length - 1].id + 1 : 1;
    const newComment = { ...action.data, ...{ id: lastId } };
    var newState = state.slice();
    newState.push(newComment);
    return newState;
  }else if (action.type == "DELETE_COMMENT") {
    console.log(state.length);
    
    var newState = state.slice();
    const targetIndex = newState.findIndex(item => item.id === action.data.id);
    console.log(targetIndex);
    newState.splice(targetIndex,1)
    return newState;
  } else {
    return state;
  }
};
export default addCommentReducer;
