import React from 'react';
// import {Collapse} from 'react-bootstrap';
import {logging} from 'react-server';

import {ContinuedLine} from '../util/util.js'

const logger = logging.getLogger(__LOGGER__);

const PARA_LIMIT = 137-3;

export default class ItemBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imgURL: props.imgURL,
      title: props.title,
      intro: props.intro,
      url: props.url,
      author: props.author
    };

  }


  render(){
    var newPara = ContinuedLine(this.state.intro,PARA_LIMIT,true);
    // logger.info("newPara: "+{newPara});

    return(
      <div className="row">
        <div className="col-md-3">
          <a href={this.state.url} >
            <img className="img-responsive" src={this.state.imgURL} />
          </a>
        </div>
        <div className="col-md-9">
          <h3>{this.state.title}</h3>
          <h4>{newPara}</h4>
          <p className="lead">{this.state.author}</p>
        </div>
      </div>
    );
  }
}
