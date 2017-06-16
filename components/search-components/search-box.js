import React from 'react';
import {logging} from 'react-server';
const logger = logging.getLogger(__LOGGER__);

const SPACE=" ";
var styleWell="well";

var styleAuto={
  width:"auto"
};

var displayInline={
  display:"inline",
  marginTop:"10px"
};

export default class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state={styles:props.styles,query:'', sm:props.sm, width:props.width }
    // this.queryChange = this.queryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  // queryChange(evt) {
  //   // evt.preventDefault();
  //   this.setState({style:this.state.style, query: evt.target.value});
  // }

  handleSearch() {
    // this.setState({style:this.state.value, query:this.refs.query.value});
    logger.debug("searchtext value: "+this.refs.searchtext.value)
    window.location = '/results?all='+this.refs.searchtext.value;
  }

  render(){

    // if (styleWell.indexOf(this.state.style) == -1){
    //     styleWell = styleWell + SPACE + this.state.style;
    // }
    displayInline.width = this.state.width;

    if (this.state.sm){
      return (

          <div className="input-group" style={displayInline}>
            <input id="searchtext" ref="searchtext" type="text" className="form-control"  style={styleAuto} />
            <span className="input-group-btn" style={styleAuto}>
              <button onClick={this.handleSearch} className="btn btn-default" type="button" >
                <span className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>

      );
    }
    return (
      <div className={this.state.styles} >
        <h4>Blog Search</h4>
        <div className="input-group">
          <input id="searchtext" ref="searchtext" type="text" className="form-control"  />
          <span className="input-group-btn">
            <button onClick={this.handleSearch} className="btn btn-default" type="button" >
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}
