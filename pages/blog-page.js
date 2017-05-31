import React from 'react';

import HeadingImage from '../components/heading-image';
import JSScripts from '../components/js-scripts';
import Gallery from '../components/image-components/gallery';

// import myData from '../data/blogs/watch_dogs.json';
import categoriesList from '../data/categories.json';

import Paragraphs from '../components/paragraphs';
import Title from '../components/title';
import SearchBox from '../components/search-box';
import CommentBox from '../components/comment-box';
import CommentButton from '../components/comment-button';
import CommentContainer from '../components/comment-container'
import CategoriesBox from '../components/categories-box';
import CategoriesList from  '../components/categories-list';

import Footer from '../components/footer';

var myData,headerData;
export default class BlogPage {

	handleRoute(next) {
	        var params = this.getRequest().getUrl().toString().replace(/\//g, "");
					console.log("params before: " + params);
					if (params.includes("#")){
						var hashIndex= params.indexOf("#");
						params = params.slice(0,hashIndex);
					}
					console.log("params:" + params);
					myData = require('../data/blogs/'+params+'.json');
					headerData = require('../data/blogs/headers/'+params+'.json');

	        return next();
	}

	getElements() {
		const items = [
		  // { title: 'Kitten 2', image: 'http://placekitten.com/302/302' },
		  // { title: 'Kitten 3', image: 'http://placekitten.com/303/303' },
		  // { title: 'Kitten 4', image: 'http://placekitten.com/304/304' },
		  // { title: 'Kitten 5', image: 'http://placekitten.com/305/305' },
		  // { title: 'Kitten 6', image: 'http://placekitten.com/306/306' },
		  // { title: 'Kitten 7', image: 'http://placekitten.com/307/307' },
		  // { title: 'Kitten 8', image: 'http://placekitten.com/308/308' },
		  // { title: 'Kitten 9', image: 'http://placekitten.com/310/310' },
		  // { title: 'Kitten 10', image: 'http://placekitten.com/311/311' },
			// { title: headerData.title, image: headerData.imgURL },
			// { title: headerData.title, image: headerData.imgURL },
			// { title: headerData.title, image: headerData.imgURL },
			// { title: headerData.title, image: headerData.imgURL },
			// { title: headerData.title, image: headerData.imgURL },
			// { title: headerData.title, image: headerData.imgURL },
			{ title: headerData.title, image: headerData.imgURL }
		];

		// console.log("headers0.title: "+headers[0].title);
		// console.log("headers1.title: "+headers[1].title);
		// const hrStyle = {
		// 	display: 'block',
    // 	height: '1px',
    // 	border: '0',
    // 	borderTop: '1px solid #000000',
    // 	margin: '1em 0',
    // 	padding: '0'
		// };

		return (

			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<Title items={headerData} />
						<Gallery items={items} />
						<hr />
						<Paragraphs items={myData.p} />
						<hr />
						<CommentBox />
						<CommentContainer items={myData.posted_comments} />
					</div>
					<div className='col-md-4'>
						<SearchBox moreStyle='card'/>
						<CategoriesList items={categoriesList.categories} />
					</div>
				</div>
				<Footer />
			</div>

	);

}

// <CategoriesBox title={categoriesList.title} items={categoriesList.values} />
  getTitle(){
    return headerData.title;
  }

	// getHeadStylesheets() {
	// 	const bodyStyle =
	// 		`<style>
	// 			body:{
	// 				background: #000000;
	// 			}
	// 		</style>`
	// 	;
  //       return [
	// 				{bodyStyle}
  //           "bootstrap/blog/css/blog-post.css",
  //           "bootstrap/blog/css/bootstrap.css",
	// 					"bootstrap/blog/css/bootstrap.min.css",
  //       ]
  // }


	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-w idth, initial-scale=1'},
			{name: 'description', content: 'About, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
