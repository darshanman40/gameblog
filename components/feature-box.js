import React from 'react';
import {logging} from 'react-server';

import Gallery from  '../components/image-components/gallery';

const logger = logging.getLogger(__LOGGER__);

const charParaLimit = 80;
const charTitleLimit = 50;
export default class FeatureBox extends React.Component{
  constructor(props){
    super(props);
    this.addLine = this.addLine.bind(this);
    this.continuedLine = this.continuedLine.bind(this);
  }


  addLine(para, charLimit){

    if (para == null || para == ""){
      console.log("para is empty, pushing spaces");
      para = <div><br /><br /></div>;
    }else if (para.length > (charLimit/2) && para.length < charLimit) {
      console.log("para.length: "+para.length+" "+para);
      para = <div><p>{para}<br /><br /></p></div>;

    }else{
      para = <p>{para}</p>;
      console.log("para.length: "+para.length+" "+para);
    }
    return para;
  }

  //TODO: Make it a global funtion
  continuedLine(para,charLimit, paraBool){
    var limit = charLimit / 2;
    if (para.length > limit) {
      console.log("para.length: "+para.length+" "+para);
      para = para.substring(0,limit);
      para = para + "...";
      if (paraBool){
        para = <div><p>{para}</p></div>;
      }else{
        para = <div><h3>{para}</h3></div>;
      }
    }else{

        var isAppend=true;
        for (var i=para.length; i< limit; i++){
            // if (isAppend){
                para = para+`\u00a0 `;
            //     isAppend = false;
            // }else{
            //   para = `\u00a0`+para;
            //   isAppend = true;
            // }
        }
        if (paraBool){
          para = <div><p>{para}</p></div>;
        }else{
          para = <div><h3>{para}</h3></div>;
        }
        // para = <div><p>{para}</p></div>;
        console.log("para: "+para);

    }



    return para
  }

  render(){
    // if (this.props.item ==null){
    //   return;
    // }
    var title = this.continuedLine(this.props.item.title, charTitleLimit, false);
    var para = this.continuedLine(this.props.item.intro, charParaLimit, true);
    var item = [{ title:this.props.item.title, image:this.props.item.imgURL }];

    return(

      <div className="col-sm-4 col-md-4 col-lg-4">

          <div className="card thumbnail">
            <a href={this.props.item.URL}>
              <Gallery items={item}/>
            </a>
            <div className="caption">
              {title}
              {para}
              <p className="author">by {this.props.item.author}</p>
            </div>
          </div>

      </div>
    );
  }
}

// {this.props.gallery}

// <img className="card" src={this.props.item.imgURL}/>
