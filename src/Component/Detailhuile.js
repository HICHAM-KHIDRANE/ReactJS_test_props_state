import React from "react";
import Huile from "./Huile";

  
class Detailhuile extends React.Component {
     
constructor(props){
  super()
  this.state={
    parfums:props.data
  }
}
  render() {
    return (
      <div className="container">
  <div className="row">
{this.state.parfums.map((parf) => ( 
   <Huile key={parf.id}  data={parf}/>
))} 
               
              </div>
      </div>
    );
  }
}

export default Detailhuile;
