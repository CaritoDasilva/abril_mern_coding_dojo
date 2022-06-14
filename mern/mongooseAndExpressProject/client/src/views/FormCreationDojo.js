import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

import { createDojo, getDojo, updateDojo } from "../services/dojosService";
import { useNavigate, useParams } from "react-router-dom";

const FormCreationDojo = () => {
    
    const { id } = useParams();
    
    const navigate = useNavigate();

    const [dojo, setDojo] = useState({
        name: '',
        address: ''
    })

    const [alertMsg, setAlertMsg] = useState([])

    const signupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Nombre debe tener mínimo 3 caracteres')
            .max(20, 'Nombre no puede tener más de 20 caracteres')
            .required('Este campo es requerido'),
        address: Yup.string()
            .min(3, 'Nombre debe tener mínimo 3 caracteres')
            .max(100, 'Nombre no puede tener más de 20 caracteres')
            .required('Este campo es requerido')
    });
    

    const handlerSubmit = async (values) => {
        try {
            // e.preventDefault();
            id ? await updateDojo(id, values) : await createDojo(values);
            //Todo: Mostrar un modal de éxito
            navigate('/dojos', { replace: true });

        } catch(err) {
            console.log("🚀 ~ file: formCreationDojo.js ~ line 19 ~ handlerSubmit ~ err", err.response.data);
            Object?.entries(err.response.data.error.errors).map((e)=>{
                console.log(e[1].message);
                setAlertMsg ([...alertMsg, e[1].message]);
            })
        }
    }

    // Refactorizar función para que no esté duplicada en 2 componentes
    const getDojoFromService = async () => {
        try {
            const dojoToUpdate = await getDojo(id);
            console.log("🚀 ~ file: formCreationDojo.js ~ line 50 ~ getDojoFromService ~ dojoToUpdate", dojoToUpdate)
            setDojo(dojoToUpdate.data.dojo);

        } catch(err) {
            //Todo: Mostrar error en el front
        }
    }

    useEffect(() => {
        id && getDojoFromService();
    }, [])

    return (
        <div className="form-container">
            <Formik
                enableReinitialize
                initialValues={dojo}
                validationSchema={signupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    handlerSubmit(values)
                }}
            >
                {({ errors, touched, getFieldProps }) => (
                    <FormikForm>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Ingresa nombre de la sucursal</Form.Label>
                             <Form.Control type="text" placeholder="Ingresar nombre" value={dojo.name} {...getFieldProps('name')} />
                         </Form.Group>
                         {errors.name && (
                             <div className="errors-message">
                                 <p>{errors?.name}</p>
                             </div>
                         )}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Ingresa dirección de la sucursal</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder="Ingresar dirección..." value={dojo.address} {...getFieldProps('address')}/>
                        </Form.Group>  
                        {errors.address && (
                            <div className="errors-message">
                                <p>{errors?.address}</p>
                            </div>
                        )}    
                         <Button variant="primary" type="submit">
                             Submit
                         </Button>
                         {alertMsg?.map((e)=><p>{e}</p>)}

                    </FormikForm>
                )}

            </Formik>
        </div>
    )
}

export default FormCreationDojo;