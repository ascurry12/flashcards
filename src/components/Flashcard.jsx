import React from "react";


function Flashcard (props) {

    return (
        <div className="flashcard" onClick={props.onClick}>
            {
                props.engFirst ?
                <h2>{props.side ? props.english : props.korean}</h2> :
                <h2>{props.side ? props.korean : props.english}</h2>
            }
        </div>
    )
}

export default Flashcard;