import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class HeadingImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { imageStatus: 'loading' };
}

handleImageLoaded() {
	this.setState({ imageStatus: 'loaded' });
}

handleImageErrored() {
	this.setState({ imageStatus: 'failed to load' });
}
	render() {
		return (
        <img
					className="img-responsive"
					src={this.props.value}
					onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
					height={this.props.height}
					width={this.props.width}

					/>

		);
	}
}
