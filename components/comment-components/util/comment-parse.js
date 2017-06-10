
const FILE_PATH="./comment.json"

import React from 'react';
import myData from './comment.json';
import { fs } from 'react-server';
// var fs = require('fs');
export default class ParseComments{

  constructor(){
    // super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment){
    // var fs = require('fs');
    //
    // fs.writeFile(FILE_PATH, comment, function(err) {
    //   if(err) {
    //       return console.log(err);
    //   }
    //
    //   console.log("The file was saved!");
    // });
    var obj = JSON.parse(myData);
    JSON.stringify(obj.push(comment));
    console.log(" written in file");
  }

  // handleCommentSubmit(comment) {
  //   var comments = this.state.data;
  //   comment.id = Date.now();
  //   var newComments = comments.concat([comment]);
  //   this.setState({data: newComments});
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     type: 'POST',
  //     data: comment,
  //     success: function(data) {
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       this.setState({data: comments});
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // }

}
