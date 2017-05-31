import React from 'react';
// import ReactDOM from 'react-dom';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

export default class Paragraphs extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    var self = this;
    var itemViews = this.props.items.map(function(item, index) {
      if (item.type === ""){
          return <p key={index}>{item.value}</p>
      }
      return <p key={index} className={item.type}>{item.value}</p>
    });

    return (
      <div>
        {itemViews}
      </div>
    );
  }
}
