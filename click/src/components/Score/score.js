import React from "react";

function Score (props){
    return(
        <div className="card">
         <div>{props.total}</div>
         <div>{props.goal}</div>
         <div>{props.status}</div>
        </div>
    )
}

export default Score;


