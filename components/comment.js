import React from 'react';
import {logging} from 'react-server';

import CommentButton from './comment-button';


const logger = logging.getLogger(__LOGGER__);
const headerStyle ={
  paddingLeft:'1em'
};
const paddingBottom ={
  paddingBottom:'10px'
}
export default class Comment extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    var user = this.props.item.user;

    if (user === ""){
      user = "Anonymous User";
    }

    return (
      <div className="media" style={paddingBottom}>
        <a href="#" className="pull-left">
          <img className="media-object" src={this.props.item.display_pic} />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
              {user}
              <small style={headerStyle}>{this.props.item.date}</small>
          </h4>
          {this.props.item.comment}
          <CommentButton />
          {this.props.nested}
        </div>
      </div>
    );
  }
}
