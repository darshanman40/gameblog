import React from 'react';
import { logging } from 'react-server';


// import ParseComments from './util/comment-parse';

// const COMMENT_FILE = "./util/comment.json";

const logger = logging.getLogger(__LOGGER__);

const noResizeStyle = {
  resize:"none"
};
// var parse;

export default class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmittedComment = this.handleSubmittedComment.bind(props.handleSubmittedComment);

    this.state = {
      id: props.id,
      user:'',
      comment: '',
      display_pic:'',
      handleSubmittedComment: props.callBackFunc,
      openCommentBox: props.openCommentBox,
      isNested: props.isNested
    };
    // this.onInputChange = this.onInputChange.bind(this);
    // parse = new ParseComments();
  }

  // onInputChange(event) {
  //   this.setState({ user:'' , text: event.target.value });
  //   logger.info("event.target",event.target.value);
  // }

  handleClick(){
    console.log("handle is clicked");
    logger.info("user: "+this.refs.user.value);
    // var func = this.state.handleSubmittedComment;
    // var id = this.state.id

    var isNested = false;
    if (this.props.isNested == true){
      isNested = true;
    }
    var item ={id:this.state.id, user:this.refs.user.value , comment: this.refs.comment.value, display_pic : '', isNested:isNested };
    // this.setState(item);
    if (this.state.handleSubmittedComment != null){
       this.state.handleSubmittedComment(item);
    }else{
      logger.err("handleClick: func is null");
    }

    if (this.state.openCommentBox != null){
          this.state.openCommentBox();
    }
    this.refs.user.value ="";
    this.refs.comment.value="";
  }

  render(){
    logger.info("comment-box id:"+ this.props.id)
    return (
      <div className="well card">
        <h4>Leave a Comment</h4>

          <div className="form-group">
            <input
                id="user"
                ref="user"
                type="text"
                className="form-control"
                placeholder="Enter username..."
            />
            <br />
            <textarea
              id="comment"
              ref="comment"
              className="form-control"
              style={noResizeStyle}
              rows="3"
            />
          </div>
          <button value="Focus the text input"  className="btn btn-primary" onClick= {this.handleClick} >
            Submit
          </button>

      </div>
    );
  }
}
