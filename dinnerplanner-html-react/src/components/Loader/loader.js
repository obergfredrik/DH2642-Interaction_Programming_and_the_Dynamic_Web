import React from "react";
import './loader.css';

function Loader(props) {
    
    return(
    <div className="loader" style={{display: props.visible ? "" : "none"}}/>
  )
}

export default Loader;