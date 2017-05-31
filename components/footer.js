import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default () => {
	logger.info('rendering the footer');
	return (
		<footer>
			<div className="footer">
				<div className="row">
					<div className="col-lg-12">
						<p className="text-muted small"><a href="http://localhost:3000">Game Blog</a></p>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</footer>
	);
};


// <footer>
// 	<div className="footer">
// 	<span>Brought to you by </span>
// 	<a href="#">Darshan Manchekar</a>
// 	<span> and </span>
// 	<a href="http://localhost:3000">Game Blog</a>
// </div>
// </footer>
