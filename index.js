import React from "react";
import "./style.css";

function BandCard(props){
    return(
     <div className="Card">
       <div className="img-container">
         <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
           <ul>
               <li>
                   <strong>Name:</strong>{props.name}
                </li>
                <li>
                    <strong>Genre:</strong>{props.genre}
                </li>
           </ul>
          </div>
            <span onClick={() => props.removeFriends(props.id)} className="remove">x
            </span>
        </div>
        );
};

export default BandCard;