import React from 'react';
import ReactDOM from 'react-dom';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

const loader = 'http://fitnice.com/rugcomposer/img/loading.gif';

const loaderStyle = {
  height :'70%',
  width : '70%'
};

export default class ImageProduct extends React.Component {

  constructor(props){
    super(props);
    this.state = {loader:loader, showImage:false };
    this.updatePosition = this.updatePosition.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    // logger.info(`constructor ImageProduct`);
  }

  componentDidMount(){
    var el = ReactDOM.findDOMNode(this); //this.getDOMNode();
    this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
    logger.info(`Image_product_componentDidMount: el.offsetTop: ${el.offsetTop}, el.offsetHeight: ${el.offsetHeight}`);
  }

  // getDefaultProps(){
  //   return {
  //     loader: 'http://fitnice.com/rugcomposer/img/loading.gif',
  //     showImage: false
  //   };
  // }

  componentDidUpdate(prevProps) {
    logger.info(`componentDidUpdate in ImageProduct`);
    logger.info(`props.showImages: ${this.props.showImages}, prevProps: ${prevProps.viewport} `);
    console.log(`componentDidUpdate in ImageProduct`);
    if (!this.props.showImages && prevProps.viewport) {
      this.updatePosition();
    }
  }

  updatePosition() {
    logger.info(`Updating position in ImageProduct`);
    var el = ReactDOM.findDOMNode(this);
    this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
    logger.info(`el.offsetTop: ${el.offsetTop}, el.offsetHeight: ${el.offsetHeight}`);
  }

  render() {
    // var showImg = !!this.props.showImage;
    // const img =  showImg ? this.props.src : this.state.loader;
    console.log(`img tag props showImage: ${this.props.showImage}`);
    console.log(`img tag state showImage: ${this.state.showImage}`);
    console.log(`img tag title: ${this.props.alt}`);
    if (this.props.showImage){
      return ( <img className='img-responsive card' src={this.props.src} alt={this.props.alt} /> );
    }else{
      return ( <img style={loaderStyle} src={this.state.loader} alt={this.props.alt} /> );
    }
    // return (
    // <img src={img} alt={this.props.alt} />
    // );
  }
}
