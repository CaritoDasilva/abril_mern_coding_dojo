import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { createPost } from '../services/post.service';

const FormPost = () => {
    const [post] = useState({
        title: '',
        description: '',
        image: '',
    });

    const [alertMsg, setAlertMsg] = useState([])


    const signupSchema = Yup.object().shape({
        title: Yup.string()
            .min(3, 'El Título debe tener mínimo 3 caracteres')
            .max(20, 'El Título no puede tener más de 20 caracteres')
            .required('Este campo es requerido'),
        description: Yup.string()
            .min(3, 'La Descripción debe tener mínimo 3 caracteres')
            .max(100, 'La Descripción no puede tener más de 20 caracteres')
            .required('Este campo es requerido'),
        image: Yup.string()
            .required('Este campo es requerido'),
    });

    const handlerSubmit = async (values) => {
        try {
            console.log(values);
            createPost(values);

        } catch (err) {
            console.log("🚀 ~ file: FormPost.js ~ line 34 ~ handlerSubmit ~ err", err)
            Object?.entries(err.response.data.error.errors).map((e) => {
                console.log(e[1].message);
                setAlertMsg([...alertMsg, e[1].message]);
            })
        }

    }


    return(
        <div className="form-container">
            <Formik
                enableReinitialize
                initialValues={post}
                validationSchema={signupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    handlerSubmit(values)
                }}
            >
                {({ errors, getFieldProps }) => (
                    <FormikForm>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ingresa título del post</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar título del post" value={post.title} {...getFieldProps('title')} />
                        </Form.Group>
                        {errors.title && (
                            <div className="errors-message">
                                <p>{errors?.title}</p>
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder="Ingresar descripción..." value={post.description} {...getFieldProps('description')} />
                        </Form.Group>
                        {errors.description && (
                            <div className="errors-message">
                                <p>{errors?.description}</p>
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label>Url de la imagen</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar url de la imagen" value={post.image} {...getFieldProps('image')} />
                        </Form.Group>
                        {errors.image && (
                            <div className="errors-message">
                                <p>{errors?.image}</p>
                            </div>
                        )}
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        {alertMsg?.map((e) => <p>{e}</p>)}

                    </FormikForm>
                )} 
            </Formik>
        </div>
    )

}

export default FormPost;