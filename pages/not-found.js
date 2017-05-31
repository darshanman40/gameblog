import React from 'react';
import {RootElement} from 'react-server';

import Header from '../components/header';
import Footer from '../components/footer';
import Error from '../components/error';

import '../styles/error.scss';


const title="404 - Page not found";
// const backgroundURL = "http://localhost:3001/images/404notfound.png";
// const errorStyle= {
// 		// width: "800px",
//  	// 	height: "400px",
// 	 	backgroundImage: `url(${backgroundURL}) `
//
// };
//
// const browserHistory = ReactRouter.History;




export default class NotFoundPage {
	handleRoute () {
		return {code: 404, hasDocument: true};
	}

	// handleClick(){
	// 	console.log('The link was clicked.');
	// }

	getElements(){
		// function handleClick(e){
		// 	e.preventDefault();
		// 	console.log('The link was clicked.');
		// }
		// function handleClick(){
		// 	console.log('The link was clicked.');
		// }
		// var handleClick = () => {
    // 	console.log('this is:', this);
  	// }
		return (
			<div className="intro-header">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>{title}</h1>
                        <h3>Wanna go back home?</h3>
                        <hr className="intro-divider" />
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a href="http://localhost:3000/" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Home</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    		</div>
    </div>
		);
	}

	// getHeadStylesheets() {
	// 	return [
	// 		"http://localhost:3001/styles/landing-page/css/bootstrap.min.css",
	// 		// "http://localhost:3001/data/blogs/styles/common.css",
	// 		"http://localhost:3001/styles/landing-page/css/landing-page.css"
	// 	];
	// }
	//
	//
	// <div className="intro-header">
	// 	<div className="container">
	//
	// 			<div className="row">
	// 					<div className="col-lg-12">
	// 							<div className="intro-message">
	// 									<h1>Landing Page</h1>
	// 									<h3>A Template by Start Bootstrap</h3>
	// 									<hr className="intro-divider" />
	// 									<ul className="list-inline intro-social-buttons">
	// 											<li>
	// 													<a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
	// 											</li>
	// 											<li>
	// 													<a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
	// 											</li>
	// 											<li>
	// 													<a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
	// 											</li>
	// 									</ul>
	// 							</div>
	// 					</div>
	// 			</div>
	// 	</div>
	// </div>
	//
	//
	// <div>
	// <Header />
	// <div className="intro-header error-style" >
	// 	<div className="container">
	// 		<div className="row">
	// 			<div className="col-lg-12">
	// 				<Error />
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>
	// <Footer />
	// </div>
	//
	// getElements () {
	// 	return [
	// 		<RootElement key={0}>
	// 			<Header/>
	// 		</RootElement>,
	// 		<RootElement key={1}>
	// 			<Error />
	// 		</RootElement>,
	// 		<RootElement key={2}>
	// 			<Footer/>
	// 		</RootElement>,
	// 	]
	// }
	getTitle(){
    return title;
  }

	// getBodyClasses() {
	// 	return ['error-style'];
	// }
}
