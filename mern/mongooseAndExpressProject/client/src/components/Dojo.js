import React from "react";

const DojoComponent = ({dojo, onclick}) => {
console.log("🚀 ~ file: Dojo.js ~ line 4 ~ DojoComponent ~ dojo", dojo)
    const { name, address } = dojo;

    return(
        <div className="cardDojo" onClick={onclick}>
            <h1>{name}</h1>
            <h3>{address}</h3>
        </div>
    )
} 

export default DojoComponent;