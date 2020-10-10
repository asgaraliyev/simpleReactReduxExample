import React from "react";
import AddComment from "./Components/AddComment";
import Comments from "./Components/Comments";
import "./style.scss";

function App() {
  return (
    <div id="App">
      <AddComment></AddComment>
      <Comments></Comments>
    </div>
  );
}

export default App;
