import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

export default class CategoriesBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var self = this;
    var itemViews = this.props.items.map(function(item, index) {
      // if (item.type === ""){
      return <li key={index}>
        <a href="#">{item}</a>
      </li>
      // }
      // return <li key={index} className={item.type}>{item}</li>
    });
    return (

      <div className="well">
        <h4>{this.props.title}</h4>
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled">
              {itemViews}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
