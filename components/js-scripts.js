import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class JSScripts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <script src={this.props.value} > </script>
    );
	}
}
