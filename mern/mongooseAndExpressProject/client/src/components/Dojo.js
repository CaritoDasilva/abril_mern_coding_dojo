import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const DojoComponent = ({ dojo, onclick, deleteDojoFromService}) => {
console.log("🚀 ~ file: Dojo.js ~ line 4 ~ DojoComponent ~ dojo", dojo)
    const { name, address, _id } = dojo;

    
    return(
        <div className="cardDojo">
            <div onClick={onclick}>
                <h1>{name}</h1>
                <h3>{address}</h3>
                {/* Todo: */}
            </div>
            <Link to={`/editar-dojo/${_id}`} replace={true}>Editar</Link>
            <Button variant="link" onClick={() => deleteDojoFromService(_id)}>Eliminar</Button>
        </div>
    )
} 

export default DojoComponent;