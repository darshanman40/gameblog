import React from 'react';
import About from '../components/about';

export default class AboutPage {
	getElements() {
		return <About />;
	}


  getTitle(){
    return "Game Blog - About"
  }

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
