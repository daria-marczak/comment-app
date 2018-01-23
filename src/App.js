import React from "react";
import "./App.css";
import CommentsListContainer from "./CommentsListContainer";
import CommentAddContainer from "./CommentAddContainer";
import DevTools from "./DevTools";

const App = () => {
  return ( 
    <div className = "App">
      <CommentsListContainer />
      <CommentAddContainer />
      <DevTools />
    </div>
  );
};

export default App;