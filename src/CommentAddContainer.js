import CommentAdd from "./CommentAdd";
import {addComment} from "./actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(CommentAdd);