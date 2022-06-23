import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';


const Login = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: ''
    });

    const loginSchema = Yup.object().shape({
        name: Yup.string()
            .required('Este campo es requerido'),
        email: Yup.string().email()
            .required('Este campo es requerido'),
        password: Yup.string()
            .required('Este campo es requerido'),
    });

    return(
        <div className="form-container">
            <div>
                <h1>Registro</h1>
                <Formik
                    enableReinitialize
                    initialValues={user}
                    validationSchema={loginSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        // handlerSubmit(values)
                    }}
                >
                    {({ errors, getFieldProps }) => (
                        <FormikForm>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar título del post" value={user.name} {...getFieldProps('name')} />
                            </Form.Group>
                            {errors.name && (
                                <div className="errors-message">
                                    <p>{errors?.name}</p>
                                </div>
                            )}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar descripción..." value={user.email} {...getFieldProps('description')} />
                            </Form.Group>
                            {errors.email && (
                                <div className="errors-message">
                                    <p>{errors?.email}</p>
                                </div>
                            )}
                            <Form.Group className="mb-3" controlId="formImage">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar url de la imagen" value={user.password} {...getFieldProps('image')} />
                            </Form.Group>
                            {errors.password && (
                                <div className="errors-message">
                                    <p>{errors?.password}</p>
                                </div>
                            )}
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            {/* {alertMsg?.map((e) => <p>{e}</p>)} */}

                        </FormikForm>
                    )} 
                </Formik>
            </div>
            <div>
                <h1>Login</h1>
                <Formik
                    enableReinitialize
                    initialValues={user}
                    validationSchema={loginSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        // handlerSubmit(values)
                    }}
                >
                    {({ errors, getFieldProps }) => (
                        <FormikForm>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar descripción..." value={user.email} {...getFieldProps('description')} />
                            </Form.Group>
                            {errors.description && (
                                <div className="errors-message">
                                    <p>{errors?.description}</p>
                                </div>
                            )}
                            <Form.Group className="mb-3" controlId="formImage">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar url de la imagen" value={user.password} {...getFieldProps('image')} />
                            </Form.Group>
                            {errors.image && (
                                <div className="errors-message">
                                    <p>{errors?.image}</p>
                                </div>
                            )}
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            {/* {alertMsg?.map((e) => <p>{e}</p>)} */}

                        </FormikForm>
                    )} 
                </Formik>
            </div>
        </div>
    )

    

}

export default Login;