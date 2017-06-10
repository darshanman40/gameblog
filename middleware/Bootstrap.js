import React from 'react';
import ReactDOM from 'react-dom';

export default class Bootstrap {

	getHeadStylesheets() {
		var params = this.getRequest().getUrl().toString().replace(/\//g, "");
		if (params.includes("#")){
			var hashIndex= params.indexOf("#");
			params = params.slice(0,hashIndex);
		}
		if (params ==""){
			params="index";
		}
		console.log("params value at Bootstrap: "+params);
		var cssURL;
		try{
			//To verify the path is valid or not
			//If exception is found then file doesn't exist so not importing the file
			var s = require('../data/blogs/styles/'+params+'.css');
		}catch(ex){
			console.log(params + '.css file not found');
			return [
				"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
			];
		}

		return [
			"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
			"http://localhost:3001/data/blogs/styles/"+params+".css"
		];
	}

}
