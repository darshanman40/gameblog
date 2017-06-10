import React from 'react';
import {logging} from 'react-server';

import CommentBox from './comment-box';
import CommentContainer from './comment-container';

const logger = logging.getLogger(__LOGGER__);
// const headerStyle = {
//   paddingLeft:'1em'
// };
// const paddingBottom = {
//   paddingBottom:'10px'
// }
export default class Comments extends React.Component{
  constructor(props){
    super(props);
    var posted_comments = props.items;
    var max = 0;
    for (var i in posted_comments){
      if (posted_comments[i].id > max){
        max = posted_comments[i].id;
      }
      if (posted_comments[i].nested_comment != null){
        var nested_comments = posted_comments[i].nested_comment;
        for (var j in nested_comments){
          if (nested_comments[i].id > max){
            max = nested_comments[i].id;
          }
        }
      }
    }

    this.state = {items:props.items, max: max};
    this.handleSubmittedComment = this.handleSubmittedComment.bind(this);
    this.handleNested = this.handleNested.bind(this);
    logger.debug("Max comment ID: " + max);
  }

  handleNested(posted_comments, comment, max){

    for (var i in posted_comments){
      if (posted_comments[i].id == comment.id){
        logger.debug("handleNested_id: "+ comment.id)
        comment.id = max;

        if (posted_comments[i].nested_comment == null){
            posted_comments[i].nested_comment = [comment];
        }else{
            posted_comments[i].nested_comment.push(comment);
        }

        return posted_comments;
      }
      if (posted_comments[i].nested_comment != null){
        var nested_comment = posted_comments[i].nested_comment;
        for (var j in nested_comment){
          if (nested_comment[j].id == comment.id){
            comment.id = max;
            posted_comments[i].nested_comment.push(comment);
            return posted_comments;
          }
        }
      }
    }

    return posted_comments;
  }

  handleSubmittedComment(comment){
    logger.debug("handleSubmittedComment_id: "+comment.id);
    logger.debug("handleSubmittedComment_user: "+comment.user);
    logger.debug("handleSubmittedComment_comment: "+comment.comment);
    logger.debug("handleSubmittedComment_isNested: "+comment.isNested);

    var items = this.state.items;
    var max = this.state.max + 1;

    if (comment.id==0){
      comment.id = max;
      items.push(comment);
      this.setState({
        items:items,
        max: max
      });
    }else{
      items = this.handleNested(items, comment,max);
      this.setState({
        items:items,
        max: max
      });
    }
  }

  render(){
    return (
      <div>
        <CommentBox id={0} callBackFunc={this.handleSubmittedComment} />
        <CommentContainer items={this.state.items} callBackFunc={this.handleSubmittedComment} />
      </div>
    );
  }
}
