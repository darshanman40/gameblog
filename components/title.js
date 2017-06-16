import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

export default class Title extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var self = this;
    const divStyle = {
		 // background: '#f2f4f7',
      padding: '10px'
		};

    const hrStyle = {
			display: 'block',
    	height: '1px',
    	border: '0',
    	borderTop: '1px solid #000000',
    	margin: '1em 0',
    	padding: '0'
		};
    var author;
    if (this.props.items.author != "" && this.props.items.author != null){
      author=(
        <p className="lead">
          by <strong>{this.props.items.author}</strong>
        </p>
      );
    }

    return (
      <div style={divStyle}>
        <h1 className="game_title">{this.props.items.title}</h1>
          {author}
        <hr style={hrStyle} />
      </div>
    );
  }
}
