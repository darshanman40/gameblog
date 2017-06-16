import React from 'react';
import {logging} from 'react-server';
import {
  Navbar, Nav, NavDropdown, Navs, NavItem,
  MenuItem, FormGroup, FormControl, Button
} from 'react-bootstrap';
import SearchBox from './search-components/search-box';

import '../styles/navbar.scss';

const logger = logging.getLogger(__LOGGER__);



export default class NavigationBar extends React.Component{

  constructor(props){
    super(props);
  }


  render(){

    return(
    <Navbar inverse collapseOnSelect fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Game Blog</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft>
        <NavItem eventKey={1} href="#">PC</NavItem>
        <NavItem eventKey={2} href="#">PS4</NavItem>
        <NavItem eventKey={3} href="#">Xbox</NavItem>
        <NavItem eventKey={4} href="#">Nintendo</NavItem>
        <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={5.1}>Action</MenuItem>
          <MenuItem eventKey={5.2}>Another action</MenuItem>
          <MenuItem eventKey={5.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={5.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight >
        <SearchBox sm={true} width="100%"/>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
  }

}
// 
//
// <Navbar.Form>
//    <FormGroup>
//      <FormControl type="text" placeholder="Search" />
//    </FormGroup>
//    {' '}
//    <Button type="submit">Submit</Button>
// </Navbar.Form>
