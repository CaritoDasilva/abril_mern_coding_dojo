import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import { addInstructors } from "../services/dojosService";

const FormAddInstructors = () => {

    const [instructors] = useState({
        instructor1: '',
        instructor2: '',
        instructor3: ''
    })
    const instructorsSchema = Yup.object().shape({
        instructor1: Yup.string()
            .max(20, 'No puede tener más 20 caracteres')
            .min(2, 'No puede tener menos de 2 caracteres')
            .required(true, 'Al menos debe ingresar un instructor'),
        instructor2: Yup.string()
            .max(20, 'No puede tener más 20 caracteres')
            .min(2, 'No puede tener menos de 2 caracteres'),
        instructor3: Yup.string()
            .max(20, 'No puede tener más 20 caracteres')
            .min(2, 'No puede tener menos de 2 caracteres')
    });

    const instructorsHandlersSubmit = async (instructors) => {
        try {
            console.log("🚀 ~ file: FormAddInstructors.js ~ line 24 ~ instructorsHandlersSubmit ~ instructors", [instructors.instructor1, instructors.instructor2, instructors.instructor3])
            const instructorsArr = [instructors.instructor1, instructors.instructor2, instructors.instructor3].filter(instructor => instructor !== '');
            await addInstructors(instructorsArr);

        } catch(err) {
            console.log("🚀 ~ file: FormAddInstructors.js ~ line 35 ~ instructorsHandlersSubmit ~ err", err.response.data)
            //To do: Agregar validación en modal 
        }
    }

    return(
        <div className="form-container">
            <Formik
                enableReinitialize
                initialValues={instructors}
                validationSchema={instructorsSchema}
                onSubmit={values => {
                    console.log("🚀 ~ file: FormAddInstructors.js ~ line 41 ~ FormAddInstructors ~ values", values)
                    instructorsHandlersSubmit(values)
                }}
            >
                {({errors, getFieldProps}) => (
                    <>
                        <FormikForm>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingresa instructor 1</Form.Label>
                                <Form.Control type="text" placeholder="Instructor 1" value={instructors.instructor1} {...getFieldProps('instructor1')} />
                            </Form.Group>
                            {errors.instructor1 && (
                                <div className="errors-message">
                                    <p>{errors?.instructor1}</p>
                                </div>
                            )}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingresa instructor 2</Form.Label>
                                <Form.Control type="text" placeholder="Instructor 2" value={instructors.instructor2} {...getFieldProps('instructor2')} />
                            </Form.Group>
                            {errors.instructor2 && (
                                <div className="errors-message">
                                    <p>{errors?.instructor2}</p>
                                </div>
                            )}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingresa instructor 3</Form.Label>
                                <Form.Control type="text" placeholder="Instructor 3" value={instructors.instructor3} {...getFieldProps('instructor3')} />
                            </Form.Group>
                            {errors.instructor3 && (
                                <div className="errors-message">
                                    <p>{errors?.instructor3}</p>
                                </div>
                            )}
                            <Button type="submit">Agregar instructores</Button>
                        </FormikForm>
                    </>
                )}

            </Formik>

        </div>
    )
}

export default FormAddInstructors;