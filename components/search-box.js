import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

const space=" ";
var styleWell="well";

export default class SearchBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var moreStyle = this.props.moreStyle;
    if (moreStyle != ""){
        styleWell = moreStyle + space + styleWell;
    }

    return (
      <div className={styleWell} >
        <h4>Blog Search</h4>
        <div className="input-group">
          <input type="text" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" >
            <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}
