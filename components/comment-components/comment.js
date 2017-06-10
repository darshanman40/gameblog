import React from 'react';
import {logging} from 'react-server';
import {Collapse, Well} from 'react-bootstrap';

import CommentButton from './comment-button';


const logger = logging.getLogger(__LOGGER__);

const SHOW_REPLIES="Show replies";
const HIDE_REPLIES="Hide replies";
const COMMENT_ID="comment_id: ";

const headerStyle = {
  paddingLeft:'1em'
};
const paddingBottom = {
  paddingBottom:'5px',
  marginTop:'5px'
}
const plainWellStyle = {
  backgroundColor: "#ffffff",
  borderStyle:"none",
  boxShadow:"none",
  marginBottom:"0",
  paddingBottom:"5px"
};

const displayStyle={
  display:"inline-block"
}

export default class Comment extends React.Component{
  constructor(props){
    super(props);
    var user = "Anonymous User";
    var imgSrc="http://placehold.it/64x64";
    if (props.item.user != ""){
      user = props.item.user;
    }
    if (props.item.display_pic != ""){
      imgSrc = props.item.display_pic;
    }
    this.state = {
      id: props.item.id,
      isNested: props.item.isNested,
      user: user,
      display_pic: imgSrc,
      date: this.props.item.date,
      comment: props.item.comment,
      open:false,
      syntax: SHOW_REPLIES
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    if (this.state.open){
      this.setState({
        id: this.state.id,
        isNested: this.state.isNested,
        user: this.state.user,
        display_pic: this.state.display_pic,
        date: this.state.date,
        comment: this.state.comment,
        open: !this.state.open,
        syntax: SHOW_REPLIES
      });
    }else{
      this.setState({
        id: this.state.id,
        isNested: this.state.isNested,
        user: this.state.user,
        display_pic: this.state.display_pic,
        date: this.state.date,
        comment: this.state.comment,
        open: !this.state.open,
        syntax: HIDE_REPLIES
      });
    }
    
  }


  render(){

    if (this.state.isNested){
      logger.debug(COMMENT_ID+this.state.id+" is nested");
    }
    if (this.state.open){
      logger.debug("replies are open "+ this.state.id +" true");
    }else{
      logger.debug("replies are open "+ this.state.id +" false");
    }

    var nested_comments =null ;
    var url_for_nested=null;
    if (this.props.nested != null){
      url_for_nested=(
        <a onClick={this.handleClick} style={displayStyle}>
          {this.state.syntax}
        </a>
      );
      nested_comments = (
        <div>
          <Collapse in={this.state.open}>
            <Well style={plainWellStyle}>
              {this.props.nested}
            </Well>
          </Collapse>
        </div>
      );
    }

    return (
      <div className="media" style={paddingBottom}>
        <a href="#" className="pull-left">
          <img className="media-object" src={this.state.display_pic} />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
              {this.state.user}
              <small style={headerStyle}>{this.state.date}</small>
          </h4>
          {this.state.comment}
          <CommentButton id={this.state.id} callBackFunc={this.props.callBackFunc} isNested= {this.props.isNested} nested={nested_comments} url_nested={url_for_nested} />

        </div>
      </div>
    );
  }
}
