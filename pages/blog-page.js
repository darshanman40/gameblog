import React from 'react';

import HeadingImage from '../components/heading-image';

import Gallery from '../components/image-components/gallery';
import categoriesList from '../data/categories.json';

import Paragraphs from '../components/paragraphs';
import Title from '../components/title';
import NavigationBar from '../components/navigation-bar'

import SearchBox from '../components/search-components/search-box';

import CommentBox from '../components/comment-components/comment-box';
import CommentContainer from '../components/comment-components/comment-container'
import Comments from '../components/comment-components/comments'
import CategoriesBox from '../components/categories-box';
import CategoriesList from  '../components/categories-list';

import Footer from '../components/footer';

var myData, headerData;
const bcStyle= {
  backgroundColor: "#ffffff"
}
export default class BlogPage {

	handleRoute(next) {
	        var params = this.getRequest().getUrl().toString().replace(/\//g, "");
					if (params.includes("?")){
						params = params.replace("?","")
						// return next();
					}

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

		return (

  			<div>
  				<NavigationBar />
  				<div className='container'>
  					<div className='row'>
  						<div className='col-lg-8'>
  							<Title items={headerData} />
  							<Gallery items={items} />
  							<hr />
  							<Paragraphs items={myData.p} />
  							<hr />
  							<Comments items={myData.posted_comments} />
  						</div>
  						<div className='col-md-4'>
  							<CategoriesList items={categoriesList.categories} />
  						</div>
  					</div>
  					<Footer />
  				</div>
				</div>

	     );
     }

  getTitle(){
    return headerData.title;
  }



	getMetaTags() {
		var tags =[
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'generator', content: 'React Server'}
		];
		if (headerData.keywords.length > 0){
			for (var i=0; i < headerData.keywords.length; i++){
				tags.push(headerData.keywords[i]);
			}
		}
		return tags;
	}
}
