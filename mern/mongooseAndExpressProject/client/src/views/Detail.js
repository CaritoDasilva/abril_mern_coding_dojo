import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import DojoComponent from "../components/Dojo";
import { getDojo } from "../services/dojosService";

const Detail = () => {

    const { id } = useParams();

    const [dojo, setDojo] = useState();

    const getDojoFromService = async () => {
        const dojoFromService = await getDojo(id);
        console.log("🚀 ~ file: Detail.js ~ line 15 ~ getDojoFromService ~ dojoFromService", dojoFromService)
        setDojo(dojoFromService.data.dojo);
    }



    useEffect(() => {
        id && getDojoFromService();
        console.log("🚀 ~ file: Detail.js ~ line 23 ~ useEffect ~ id", id)
    }, [id])

    return(
        <>
            {dojo && (
                <div>
                    <Link to="/dojos">Volver</Link>
                    <h1>Sucursal Detalle</h1>
                    <DojoComponent dojo={dojo}/>
                </div>

            )}
        </>
    )
}

export default Detail;