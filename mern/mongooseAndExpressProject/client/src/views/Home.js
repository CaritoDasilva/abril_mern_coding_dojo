import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DojoComponent from "../components/Dojo";
import { getDojos } from "../services/dojosService";

const Home = () => {

    const [dojos, setDojos] = useState([]);
    const navigate = useNavigate();

    const getDojosFromService = async () => {
        try {
            const dojosFromService = await getDojos();
            console.log("🚀 ~ file: Home.js ~ line 11 ~ Home ~ dojosFromService", dojosFromService)
            setDojos(dojosFromService.data.dojos);
        } catch(err) {
            // To do: mostrar errores
        }
    }

    const goToDetailPage = (id) => {
        console.log("🚀 ~ file: Home.js ~ line 23 ~ goToDetailPage ~ id", id)
        navigate(`/dojos/${id}`, { replace: true });
    }

    useEffect(() => {
        getDojosFromService();
    }, []);

    return(
        <div>
            <h1>Sucursales</h1>
            {
                dojos.length > 0 && dojos.map(dojo => (
                    <DojoComponent dojo={dojo} key={dojo._id} onclick={() => goToDetailPage(dojo._id)} />
                ))
            }
        </div>

    )

}

export default Home;