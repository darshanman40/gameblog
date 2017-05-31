import React from 'react';
import ReactDOM from 'react-dom';
import {logging} from 'react-server';
import ImageProduct from './image-product';

const logger = logging.getLogger(__LOGGER__);

export default class ImageContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {showImage:false};
    this.setShowImage = this.setShowImage.bind(this);
    this.updateImagePosition = this.updateImagePosition.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  // onImgLoad({target:img}) {
  //     const {width, height} = this.state.dimensions;
  //     updateImagePosition(height,width);
  //     //this.setState({dimensions:{height:img.offsetHeight, width:img.offsetWidth}});
  // }
  //
  // getInitialState() {
  //   return {
  //     showImage: false
  //   };
  // }
  //
  // getDefaultProps() {
  //   return {
  //     showImage: false
  //   };
  // }
  //
  // componentDidMount(){
  //   var min = this.props.viewport.top;
  //   var max = this.props.viewport.top + this.props.viewport.height;
  //   var end = this.props.viewport.bottom;
  //   console.log(`min: ${min}, top: ${top}, end: ${end}, max: ${max}, height: ${this.props.viewport.height}`);
  //   if ((min <= (top + height) && top <= (max-29))) {
  //     this.setShowImage(true);
  //   }
  // }

  componentDidMount() {
    // allow image display override
    // if (this.props.showImage) {
    //   this.setShowImage(true);
    // }
    var el = ReactDOM.findDOMNode(this);
    this.updateImagePosition(el.offsetTop, el.offsetHeight);
    logger.info(`componentDidMount: el.offsetTop: ${el.offsetTop}, el.offsetHeight: ${el.offsetHeight}`);
  }

  updateImagePosition(top, height) {
    // image is already displayed, no need to check anything
    if (this.state.showImage) {
      console.log(`image is set ${this.props.title}`);
      return;
    }

    // update showImage state if component element is in the viewport
    var min = this.props.viewport.top;
    var max = this.props.viewport.top + this.props.viewport.height;

    console.log(`min: ${min}, top: ${top}, max: ${max}, height: ${height}`);
    if (max >= 29){
      max=max-29;
    }
    if ((min <= (top + height) && top <= max)) {
      this.setShowImage(true);
    }
  }

  setShowImage(show) {
    this.setState({
      showImage: !!(show)
    });
  }

  render() {
    return (
          <ImageProduct src={this.props.image} alt={this.props.title} viewport={this.props.viewport} showImage={this.state.showImage}
            updateImagePosition={this.updateImagePosition} />
    );
  }
}
