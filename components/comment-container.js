import React from 'react';
import {logging} from 'react-server';
import Comment from  './comment';
const logger = logging.getLogger(__LOGGER__);

export default class CommentContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var self = this;

    var itemViews = this.props.items.map(function(item, index) {
      if (item.nested_comment == null){
       logger.info("No nested comment found");
       return (<Comment key={index} item={item} isNested={self.props.isNested} />);
      } else {
         logger.info("nested comment exist");
         var nested_comment = (<CommentContainer items={item.nested_comment} isNested={true} />);
         return (
           <Comment key={index} item={item} nested={nested_comment} isNested={self.props.isNested} />
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
