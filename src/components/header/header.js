import React from "react";
import "./header.css";

function Header(props) {
    console.log("headers props");
    console.log(props);
    return (

        <div className="header">
            <div className="title">{props.children}</div>
            <div className="messagebox">{props.message}</div>
            <div className="results">
                Score: {props.score} Highscore: {props.highscore}
            </div>
        </div>
    )
};

export default Header;