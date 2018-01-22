import React from "react";
import "./App.css";
import CommentsListContainer from "./CommentsListContainer";
import CommentAddContainer from "./CommentAddContainer";

const App = () => {
  return ( 
    <div className = "App">
      <CommentsListContainer />
      <CommentAddContainer />
    </div>
  );
};

export default App;