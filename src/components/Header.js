import React from "react";
import Menu from "./MenuLogic";
import "../App.css"

function Header(props) {
    return (
        <header className="header" >
            <h2>{props.name}</h2>
            <Menu links={props.links} ></Menu>
        </header>
    )
}

export default Header