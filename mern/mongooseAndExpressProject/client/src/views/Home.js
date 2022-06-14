import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DojoComponent from "../components/Dojo";
import { deleteDojo, getDojos } from "../services/dojosService";

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

    const deleteDojoFromService = async (id) => {
        try {
            await deleteDojo(id);
            const newDojoArr = dojos.filter(dojo => dojo._id !== id);
            setDojos(newDojoArr);

        } catch (err) {
            //ToDo: Manejar errores
        }
    }

    useEffect(() => {
        getDojosFromService();
    }, []);

    return(
        <div>
            <h1>Sucursales</h1>
            {
                dojos.length > 0 && dojos.map(dojo => (
                    <DojoComponent dojo={dojo} key={dojo._id} onclick={() => goToDetailPage(dojo._id)} deleteDojoFromService={deleteDojoFromService} />
                ))
            }
        </div>

    )

}

export default Home;