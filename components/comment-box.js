import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

const noResizeStyle = {
  resize:"none"
};

export default class CommentBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="well card">
        <h4>Leave a Comment</h4>
        <form role="form">
        <div className="form-group">
           <input type="text" className="form-control" placeholder="Enter username..."/>
          <br />
          <textarea className="form-control" style={noResizeStyle} rows="3"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
