import React from 'react';
import FeatureBox from '../components/feature-box';
import CategoriesList from  '../components/categories-list';
import NavigationBar from '../components/navigation-bar';
import SearchBox from '../components/search-components/search-box';


import categories from '../data/categories.json';

export default class LandingPage{
  getElements() {

    var items = categories.categories.map(function(category) {
      var games = category.list.map(function(game,index){
        var headerKey = game.header_key;
        try{
            var data = require('../data/blogs/headers/'+headerKey+'.json');
            return (<FeatureBox key={index} item={data} />);
        }catch(ex){
          console.log("WARN: "+headerKey+".json file not found");
        }
        return null;
      });

      return games;
    });

		return (
      <div>
        <NavigationBar />
        <div className="container">
        <div className="row">
          <div className="row">
              <div className="col-md-9">
                <div className="row">
                  {items}
                </div>
              </div>
              <div className="col-md-3">
                <CategoriesList items={categories.categories} />
              </div>
          </div>
        </div>
        </div>
      </div>
    );
	}

  getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'Write reviews, walkthroughs of your favourite games'},
      {name:'googlebot', content:'noodp, noarchive'}
		];
	}

  getTitle(){
    return "Game Blog";
  }

}
