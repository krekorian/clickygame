import React from "react";
import "./logo.css";

function Logo(props) {
    // console.log("props");
    // console.log(props);
    return (

        <div className="Logo" onClick={() => props.clickLogo(props.id)}>
            <div className="logo-container">

                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
};


export default Logo;