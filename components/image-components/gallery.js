import React from 'react';
import {logging} from 'react-server';
import ImageContainer from './image-container';

const logger = logging.getLogger(__LOGGER__);

export default class Gallery extends React.Component{

  constructor(props){
    super(props);
    this.state = {viewport: { top: 0, height: 0 } };
    this.updateViewport = this.updateViewport.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateViewport, false);
    window.addEventListener('resize', this.updateViewport, false);
    this.setState({viewport: {top:0,height:window.innerHeight } });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateViewport);
    window.removeEventListener('resize', this.updateViewport);
  }

  updateViewport() {
    // TODO: debounce this call
    var that = this;
    that.setState({
      viewport: {
        top: window.pageYOffset,
        height: window.innerHeight
      }
    });
  }

  render() {
    var self = this;
    var itemViews = this.props.items.map(function(item,index) {
      return <ImageContainer key={index} title={item.title} image={item.image} viewport={self.state.viewport} />
    });

    return (
      <div>
        {itemViews}
      </div>
    );
  }
}
