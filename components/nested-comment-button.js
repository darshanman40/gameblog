import React from 'react';
import {Collapse} from 'react-bootstrap';
import {logging} from 'react-server';
import CommentBox from './comment-box';
import Comment from './comment';


const logger = logging.getLogger(__LOGGER__);
const headerStyle ={
  paddingLeft:'1em'
};

const wellStyle = {
  backgroundColor: "transparent",
  borderStyle: "none",
  padding:"0"
};

export default class NestedCommentButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {open:false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ open: !this.state.open })
  }

  render() {
    var self = this;
    var comments;


    if (this.props.nested_comments !=null){
        comments = this.props.nested_comments.map(function(comment, index) {
          var user = comment.user;
          if (user==""){
            user="Anonymous User";
          }
          return (
            <div className="media">
              <a href="#" className="pull-left">
                <img className="media-object" src={comment.display_pic} />
              </a>
              <div className="media-body">
                <h4 className="media-heading">
                    {user}
                    <small style={headerStyle}>{comment.date}</small>
                </h4>
                {comment.comment}
                <br />
                <a onClick={self.handleClick} >
                  Reply
                </a>
              </div>
            </div>
          );

        });
    }

    return (
      <div>
        {comments}
        <Collapse in={this.state.open}>
          <div className="well" style = {wellStyle}>
            <CommentBox />
          </div>
        </Collapse>

      </div>
    );
  }
}


// <div className="media">
//   <a href="#" className="pull-left">
//     <img className="media-object" src={comment.display_pic} />
//   </a>
//   <div className="media-body">
//     <h4 className="media-heading">
//         {user}
//         <small style={headerStyle}>{comment.date}</small>
//     </h4>
//     {comment.comment}
//     <br />
//     <a onClick={this.handleClick} >
//       Reply
//     </a>
//   </div>
// </div>

  // <a onClick={ () => this.setState({ open: !this.state.open }) }>

        //   <Comment key={index} item={comment} />
        //
        // </div>
