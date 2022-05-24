import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const { setUser } = props;
    const navigate = useNavigate();

    const signupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'No puede tener menos de 2 caracteres')
            .max(10, 'No puede tener más de 10 caracteres!')
            .required('Este campo es requerido'),
        email: Yup.string()
            .email('Debe ingresar un email válido')
            .min(2, 'No puede tener menos de 2 caracteres')
            .required('Este campo es requerido'),
        password: Yup.string()
            .min(2, 'No puede tener menos de 2 caracteres')
            .max(6, 'No puede tener más de 6 caracteres!')
            .oneOf([Yup.ref('confirmPasword'), null], "Ambas contraseñas deben coincidir")
            .required('Este campo es requerido'),
        confirmPasword: Yup.string()
            .min(2, 'No puede tener menos de 2 caracteres')
            .max(6, 'No puede tener más de 6 caracteres!')
            .oneOf([Yup.ref('password'), null], "Ambas contraseñas deben coincidir")
            .required('Este campo es requerido'),
        age: Yup.number()
            .min(0)
            .required('Este campo es requerido')
    });

    return(
        <div>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPasword: '',
                    age: ''
                }}
                validationSchema={signupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    setUser(values)
                    navigate('/home');
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="username">Usuario:</label>
                        <Field name="username" />
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                        ) : null}   
                        <label htmlFor="email">Email:</label>                     
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <label htmlFor="password">Password:</label>                 
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <label htmlFor="confirmPasword">Confirmar contraseña:</label>
                        <Field name="confirmPasword" type="password"  />
                        {errors.confirmPasword && touched.confirmPasword ? (
                            <div>{errors.confirmPasword}</div>
                        ) : null}
                        <label htmlFor="age">Edad:</label>
                        <Field name="age" />
                        {errors.age && touched.age ? (
                            <div>{errors.age}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default Register;