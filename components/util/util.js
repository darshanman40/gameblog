import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);
/*
ContinuedLine:
para: the data needed to be shorten

charLimit: How many characters, need to be displayed

paraBool : boolean value to check its for paragarabh or title and return p tag or h1 tag acoordingly.

*/
export function ContinuedLine(para, charLimit, paraBool){
  var limit = charLimit/2;
  if (para.length > charLimit) {
    // console.log("para.length: "+para.length+" "+para);
    para = para.substring(0,charLimit);
    para = para + "...";
  }else{
      // var isAppend=true;
      for (var i=para.length; i<charLimit; i++){
              para = para+`\u00a0 `;
      }
  }
  return para
}


export function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
