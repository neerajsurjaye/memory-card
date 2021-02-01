import React from "react";

let Card = (props) => {


    return (
        <div className="card" onClick={() => props.upd(props.val)}>
            { props.val}
        </div >
    )
}

export default Card;