import React from 'react';
import {Collapse} from 'react-bootstrap';
import {logging} from 'react-server';
import CommentBox from  './comment-box';


const logger = logging.getLogger(__LOGGER__);

const wellStyle = {
  backgroundColor: "transparent",
  borderStyle: "none",
  padding:"0",
};

const displayStyle={
  display:"inline-block"
}

export default class CommentButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
    this.openCommentBox = this.openCommentBox.bind(this);
  }

  openCommentBox(){
    this.setState({
      open: !this.state.open
    });
  }


  render() {
    return (
      <div>
        <a onClick={this.openCommentBox} style={displayStyle}>
          Reply
        </a> &nbsp;&nbsp;
        {this.props.url_nested}
        {this.props.nested}
        <Collapse in={this.state.open}>
          <div className="well" style={wellStyle}>
            <CommentBox id={this.props.id} callBackFunc={this.props.callBackFunc}
              openCommentBox={this.openCommentBox}
              isNested={this.props.isNested}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

// <a onClick={ () => this.setState({ open: !this.state.open }) }>
