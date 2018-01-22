import React from "react";

const Comment = ({text, votes, id, thumbsUp, thumbsDown, removeComment}) => 
  <li>
    {text} <span> votes: {votes}</span>
    <button onClick={() => thumbsUp(id)}>Thumb up</button>
    <button onClick={() => thumbsDown(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove</button>
  </li>;

export default Comment;