import React from "react";
import Comment from "Comment";

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} />)}</ul>;

export default commentsList;