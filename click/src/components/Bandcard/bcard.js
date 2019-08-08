import React from "react";
import "./bcard.css";

function BandCard(props){
    return (
     <div className="Card bandCard">
       <div className="img-container">
        <div className="col-md-3">
       <img alt={props.name}  src={props.image} id={props.id} />
      </div>
        </div>
        </div>
       
        );
}

export default BandCard;