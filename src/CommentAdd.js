import React from "react";

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  };

  handleChange(e) {
    this.setState({
        text: e.target.value
      }
    )
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({text: ""});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add new comment</label>
        <input onChange={this.handleChange.bind(this)} value={this.state.text} />
      </form>
    )
  }
};

export default CommentAdd;