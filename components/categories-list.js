import React from 'react';
import {logging} from 'react-server';
import {Accordion,Panel} from 'react-bootstrap';
// import Pannel from 'react-bootstrap';
const logger = logging.getLogger(__LOGGER__);

export default class CategoriesList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var self = this;
    var itemViews = this.props.items.map(function(item, index) {
      // var refIndex = "#"+item.category.replace(" ","_");
      var games = item.list.map(function(game, gameIndex) {
        return(
            <div key={gameIndex}>
                <a href={game.url}>
                  {game.game}
                </a><br />
            </div>
          );
      });

      return (
          <Panel key={index} header={item.category} eventKey={index}>
            {games}
          </Panel>
        );
    });

    return (
      <div className="card">
        <Accordion>
          {itemViews}
        </Accordion>
      </div>
    );
  }
}


// const accordionInstance = (
//   <Accordion>
//     <Panel header="Collapsible Group Item #1" eventKey="1">
//       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
//     </Panel>
//
//   </Accordion>
// );



// <div key={demoStr} >
//
//      <a className="list-group-item" href={refDemoStr} data-toggle="collapse">Simple collapsible</a>
//       <div id={demoStr} className="collapse">
//
//          dieidi
//
//       </div>
//
//   </div>

//<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">{item.category}</button>


// <div class="list-group">
//
//      <a class="list-group-item" href="#demo" data-toggle="collapse">Simple collapsible</a>
//       <div id="demo" class="collapse">
//          <div class="list-group">
//
//          </div>
//       </div>
//
//   </div>


    //
    // <div>
    // <a href={refIndex} key={index} className="list-group-item" data-toggle="collapse" >{item.category}</a>
    //   <div id={strIndex} className="collapse">
    //       <div className="list-group">
    //         <a className="list-group-item" href="#">Middle Earth: Shadow of Mordor</a>
    //       </div>
    //     </div>
    // </div>

// <div>
//   <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">this.props.btnName</button>
//   <div id="demo" class="collapse">
//     <div class="list-group">
//       <a href="#" class="list-group-item active">Category 1</a>
//       <a href="#" class="list-group-item">Category 2</a>
//       <a href="#" class="list-group-item">Category 3</a>
//     </div>
//   </div><br >
//   <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo2">Simple collapsible</button>
//   <div id="demo2" class="collapse">
//     <div class="list-group">
//       <a href="#" class="list-group-item active">Category 1</a>
//       <a href="#" class="list-group-item">Category 2</a>
//       <a href="#" class="list-group-item">Category 3</a>
//     </div>
//   </div>
// </div>
