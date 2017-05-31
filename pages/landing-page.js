import React from 'react';
import FeatureBox from '../components/feature-box';
import SearchBox from '../components/search-box';
import CategoriesList from  '../components/categories-list';

import categories from '../data/categories.json';

export default class LandingPage{
  getElements() {

    var items = categories.categories.map(function(category) {
      var games = category.list.map(function(game,index){
        var headerKey = game.header_key;
        try{
            var data = require('../data/blogs/headers/'+headerKey+'.json');
            // var item = [{ title:data.title, image:data.imgURL }];
            // var gal = <Gallery items={item}/>
            return (<FeatureBox key={index} item={data} />);
        }catch(ex){
          console.log("WARN: "+headerKey+".json file not found")
        }
        return null;
      });

      return games;
    });

		return (
      <div className="container">
      <div className="row">

          <div className="col-lg-12">
            <h3>Games</h3>
          </div>

        <div className="row">
            <div className="col-md-9">
              <div className="row">
                {items}
              </div>
            </div>
            <div className="col-md-3">
              <SearchBox moreStyle="card" />
              <CategoriesList items={categories.categories} />
            </div>
        </div>
      </div>
      </div>
    );
	}
  // <FeatureBox item={myData} />
  // <FeatureBox item={myData} />
  // <FeatureBox item={myData} />
  // <FeatureBox item={myData} />
  getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}

}


// <FeatureBox imgURL={myData.imageURL} title={myData.title} para={myData.intro}/>
// <FeatureBox imgURL={myData.imageURL} title={myData.title} />
// <FeatureBox imgURL={myData.imageURL} title={myData.title} />
// <FeatureBox imgURL={myData.imageURL} title={myData.title} />
