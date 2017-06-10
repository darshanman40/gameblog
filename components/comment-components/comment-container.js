import React from 'react';
import {logging} from 'react-server';
import Comment from  './comment';
const logger = logging.getLogger(__LOGGER__);

export default class CommentContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:props.items,
      isNested: props.isNested
    };
  }

  render(){
    var self = this;

    var itemViews = this.props.items.map(function(item, index) {
      if (item.nested_comment == null){
       logger.info("No nested comment found");
       if (self.props.callBackFunc == null){
         logger.info("callBackFunc is null inside null nested comment");
       }
       return (<Comment key={index} item={item} isNested={self.props.isNested} callBackFunc={self.props.callBackFunc} />);
      } else {
         logger.info("nested comment exist");
         var nested_comment = (<CommentContainer items={item.nested_comment} isNested={true} callBackFunc={self.props.callBackFunc} />);
         if (self.props.callBackFunc == null){
           logger.info("callBackFunc is null inside not-null nested comment");
         }
         return (
           <Comment key={index} item={item} nested={nested_comment} isNested={self.props.isNested} callBackFunc={self.props.callBackFunc} />
         );
      }

    });

    return (
      <div className="media">
        {itemViews}
      </div>
    );
  }
}
