import React from 'react';
import ViewportContainer from 'react-viewport';


// const items = [
//   { title: 'Kitten 1', image: 'http://placekitten.com/311/313' },
//   { title: 'Kitten 2', image: 'http://placekitten.com/302/302' },
//   { title: 'Kitten 3', image: 'http://placekitten.com/303/303' },
//   { title: 'Kitten 4', image: 'http://placekitten.com/304/304' },
//   { title: 'Kitten 5', image: 'http://placekitten.com/305/305' },
//   { title: 'Kitten 6', image: 'http://placekitten.com/306/306' },
//   { title: 'Kitten 7', image: 'http://placekitten.com/307/307' },
//   { title: 'Kitten 8', image: 'http://placekitten.com/308/308' },
//   { title: 'Kitten 9', image: 'http://placekitten.com/310/310' },
//   { title: 'Kitten 10', image: 'http://placekitten.com/311/311' }
// ];


export default class ViewPortComponent extends React.Component {  //= React.createClass({
    constructor(props){
      super(props);
    }
      render() {
        return(
          <div>
            <ViewportContainer
                className="Container"
                viewHeight="50"
                viewWidth="50"
            >



            </ViewportContainer>
          </div>
        );
      }
  //});
}
//export ViewPortComponent;
