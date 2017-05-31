import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div>
        <h1>Darshan Manchekar</h1>
        <h3>Cloud App developer</h3>
      </div>
		);
	}
}
