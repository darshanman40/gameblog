import React from 'react';
import {logging} from 'react-server';
import {
  Navbar, Nav, Navs,
  FormGroup, FormControl, Button
} from 'react-bootstrap';

import SearchBox from '../search-components/search-box';
// import '../styles/navbar.scss';

const logger = logging.getLogger(__LOGGER__);

const paddinTop={
  paddingTop:"10px"
}

const COLLAPSE="navbar-collapse collapse"
const COLLAPSING="navbar-collapse collapsing"
const COLLAPSIN="navbar-collapse collapse in"

/*
Still under progress and facing following issues:
- not able to animate transition
- doesnt push remaining window towards bottom (i.e. overlap issue of 'collapse in')
- search box doesnt occupy full screen (not wrking on other Nabar tooo)
*/
export default class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      collapse: "navbar-collapse collapse",
      isCollapsed:false
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }


  handleChange(evt){
    logger.debug("inside handleChange");
    this.setState(function(prevState, props) {
      if (prevState.collapse == COLLAPSE){
        logger.debug("prevState is Collapse");
        if (this.state.isCollapsed){
          logger.debug("isCollapsed: is true");
        }else{
          logger.debug("isCollapsed: is false");
        }
        return {
          collapse: COLLAPSIN,
          isCollapsed: this.state.isCollapsed
        }
      }
      logger.debug("prevState isn't Collapse");
      if (this.state.isCollapsed){
        logger.debug("isCollapsed: is true");
      }else{
        logger.debug("isCollapsed: is false");
      }
      return {
          collapse: COLLAPSE,
          isCollapsed: this.state.isCollapsed
      };
    });

  }

  handleClick(){
    if (this.state.isCollapsed){
      this.setState({
        collapse: COLLAPSE,
        isCollapsed: false
      });
    }else{
      this.setState({
        collapse: COLLAPSIN,
        isCollapsed: true
      });
    }
  }

  render(){

    var navbarRight, listInBar;

    if (!this.state.isCollapsed){
      navbarRight=(
        <ul className="navbar-nav pull-right" style={paddinTop} >
          <li className="nav-item">
            <SearchBox sm={true} width="auto"/>
          </li>
        </ul>
      );
      listInBar = null;
    }else{
      navbarRight = null;
      listInBar = (
        <li><SearchBox sm={true} width="100%" /></li>
      );
    }

    return(

        <nav className="navbar navbar-inverse navbar-fixed-top sb-navbar" >
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbarExample"

            onClick={this.handleClick}
            aria-expanded="false" >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
            <div className="container" >
              <div className="navbar-header">
                <a className="navbar-brand" href="/">Game Blog</a>
              </div>
              <div className={this.state.collapse}  id="navbarExample" aria-expanded="false" >
                <ul className="nav navbar-nav mr-auto">
                  <li><a href="#" >PC</a></li>
                  <li><a href="#" >Xbox</a></li>
                  <li><a href="#" >PlayStation</a></li>
                  <li><a href="#" >Nintendo</a></li>
                  {listInBar}
                </ul>
                  {navbarRight}
                </div>
            </div>
        </nav>

    );
  }
}


// <ul className="navbar-nav pull-right" style={paddinTop} >
//   <li className="nav-item">
//     <SearchBox sm={true} />
//   </li>
// </ul>


// <div className="navbar-collapse collapse" id="navbarExample">

// <button
//   type="button"
//   data-toggle="collapse"
//   data-target="#navbarExample"
//   className="navbar-toggle" >


            //   <Nav pullRight>
            //     <SearchBox sm={true} />
            //   </Nav>
            // </div>

  // <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false" style="height: 1px;">
  //     <ul class="nav navbar-nav">
  //         <li>
  //             <a href="#">About</a>
  //         </li>
  //         <li>
  //             <a href="#">Services</a>
  //         </li>
  //         <li>
  //             <a href="#">Contact</a>
  //         </li>
  //     </ul>
  // </div>


//
// <Navbar.Form>
//    <FormGroup>
//      <FormControl type="text" placeholder="Search" />
//    </FormGroup>
//    {' '}
//    <Button type="submit">Submit</Button>
// </Navbar.Form>
