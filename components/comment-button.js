import React from 'react';
import {Collapse, Button} from 'react-bootstrap';
import {logging} from 'react-server';
import CommentBox from  './comment-box';


const logger = logging.getLogger(__LOGGER__);

const wellStyle = {
  backgroundColor: "transparent",
  borderStyle: "none",
  padding:"0"
};

export default class CommentButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a onClick={ () => this.setState({ open: !this.state.open }) }>
          Reply
        </a>
        <Collapse in={this.state.open}>
          <div className="well" style = {wellStyle}>
            <CommentBox />
          </div>
        </Collapse>

      </div>
    );
  }
}
