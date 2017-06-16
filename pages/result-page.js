import React from 'react';
import {logging} from 'react-server';

import ItemBar from '../components/search-components/itembar';

import NavigationBar from '../components/navigation-bar'

// import Title from '../components/title';

import categories from '../data/categories.json';

const logger = logging.getLogger(__LOGGER__);

const SPACE = "%20";
const AUTHOR = "author";
const TITLE = "title"
const ALL = "all";

var param;
var queryPara;


export default class ResultPage{

  handleRoute(next) {

    var params = this.getRequest().getUrl().toString().replace(/\/results/g, "");
		if (params.includes("?")){
			params = params.toString().replace("?","");
      // params = params.replace(SPACE," ");
      // return next();
      queryPara = params.replace(/=[a-zA-Z0-9]+/,"");
      logger.info("queryPara: "+queryPara);
      switch(queryPara){
        // case /\?author=/.test(params):
        case AUTHOR:
          logger.debug("author query found")
          params = params.replace(SPACE," ");
          param = params.replace("author=","");
          logger.debug("after replace, param: "+param);
          break;
        // case /\?title=/.test(params):
        case TITLE:
          logger.debug("title query found")
          param = params.replace("title=","");
          logger.debug("after replace, param: "+param);
          break;
        case ALL:
          logger.debug("all query found")
          param = params.replace("all=","");
          logger.debug("after replace, param: "+param);
          break;
        default:
          param="";
          queryPara="";
          break;
      }
		}else {
      logger.warning("No query found: "+params);
    }

		// console.log("params before: " + params);
		// if (params.includes("#")){
		// 	var hashIndex= params.indexOf("#");
		// 	params = params.slice(0,hashIndex);
		// }
		// console.log("params:" + params);
		// myData = require('../data/blogs/'+params+'.json');
		// headerData = require('../data/blogs/headers/'+params+'.json');

    return next();
	}

  getElements() {
    if (queryPara == ""){
      console.log("queryPara is null");
      return(<div> </div>);
    }

    if (param == "") {
      console.log("param is null");
      return(<div> </div>);
    }
    var results = 0;
    var items = categories.categories.map(function(category) {
      var games = category.list.map(function(game,index){
        var headerKey = "../data/blogs/headers/"+game.header_key+".json";  //game.header_key;
        try{
            var found= false;
            var data = require('../data/blogs/headers/'+game.header_key+'.json');
            const regex = new RegExp(param, 'i');
            // var data = require("'"+headerKey+"'");
            switch (queryPara){
              case AUTHOR:
                if (data.author.search(regex) != -1){
                    results++;
                    found=true;
                }else{
                  logger.debug("author didn't match: "+data.author);
                }
                break;
              case TITLE:
                if (data.title.search(regex) != -1){
                    results++;
                    found=true;
                }else{
                  logger.debug("Title didn't match: "+data.title);
                }
                break;
              case ALL:
                if (data.title.search(regex) != -1){
                  results++;
                  found=true;
                }else if (data.author.search(regex) != -1){
                  results++;
                  found=true;
                }else if (data.keywords[0].content.search(regex) != -1){
                  results++;
                  found=true;
                }
                break;
              default:
                logger.debug("unknown queryPara: "+queryPara);
                break;
            }
            if (found){
               return (
                <div>
                  <ItemBar
                    key={index}
                    imgURL={data.imgURL}
                    title={data.title}
                    intro={data.intro}
                    url={data.URL}
                    author={data.author}
                  />
                  <hr />
                </div>
              );
            }

        }catch(ex){
          logger.warning("WARN: "+headerKey+" file not found")
          console.log("ERR: "+ex.toString());
        }
        return null;
      });

      return games;
    });

    var title={title:"Game Blog"};
    if (results == 0){
      return (
        <div>
          <NavigationBar />
          <div className="container">
            <br />
            <br />
            <h1>No Items found</h1>
          </div>
        </div>
      );
    }

    return (
      <div>
        <NavigationBar />
        <div className="container">
          <hr />
          {items}
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
    return "Game Blog - Result";
  }
}

// <Title items={title} />
