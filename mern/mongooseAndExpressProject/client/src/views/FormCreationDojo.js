import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';

import { createDojo } from "../services/dojosService";

const FormCreationDojo = () => {

    const [dojo] = useState({
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
            await createDojo(values)

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