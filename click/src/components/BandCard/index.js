import React from "react";
import "./style.css";

function BandCard(props){
    return(
     <div className="Card">
       <div className="img-container">
         <div className="row">
         <div className="col">
         <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
          </div>
          <div className="col">
           <ul>
               <li>
                   <strong>Name:</strong>{props.name}
                   </li>
                <li>
                    <strong>Genre:</strong>{props.genre}
                </li>
           </ul>
           </div>
          </div>
          </div>
            <span onClick={() => props.removeFriends(props.id)} className="remove">x
            </span>
        </div>
        );
};

export default BandCard;