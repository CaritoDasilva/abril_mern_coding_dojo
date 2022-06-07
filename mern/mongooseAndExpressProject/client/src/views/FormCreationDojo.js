import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createDojo } from "../services/dojosService";

const FormCreationDojo = () => {

    const [dojo, setDojo] = useState({
        name: '',
        address: ''
    })

    const [alertMsg, setAlertMsg] = useState([])
    

    const handlerSubmit = async (e) => {
        try {
            e.preventDefault();
            await createDojo(dojo)

        } catch(err) {
            console.log("🚀 ~ file: formCreationDojo.js ~ line 19 ~ handlerSubmit ~ err", err.response.data);
            Object?.entries(err.response.data.error.errors).map((e)=>{
                console.log(e[1].message);
                setAlertMsg ([...alertMsg, e[1].message]);
            })
        }
    }

    return (
        <div className="form-container">
            <Form onSubmit={handlerSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresa nombre de la sucursal</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" value={dojo.name} onChange={(e) => setDojo({...dojo, name: e.target.value})} />
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresa dirección de la sucursal</Form.Label>
                    <Form.Control type="text" as="textarea" rows={3} placeholder="Ingresar dirección..." value={dojo.address} onChange={(e) => setDojo({...dojo, address: e.target.value})}/>
                </Form.Group>             
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {alertMsg?.map((e)=><p>{e}</p>)}
            </Form>
        </div>
    )
}

export default FormCreationDojo;