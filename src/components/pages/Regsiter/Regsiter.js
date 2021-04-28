import Checkbox from "components/Checkbox";
import Input from "components/Input";
import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { registerUser } from 'store/actions/user'
import * as Yup from 'yup'

const Regsiter = ({ logged, registerUser }) => {

  const history = useHistory()

  useEffect(() => {
    if (logged) history.push('/')
  }, [logged, history])

  const initialValues = {
    login: '',
  }
  const onSubmit = formValues => {
    registerUser(formValues)
  }
  const validationSchema = Yup.object({
    login: Yup.string()
      .min(3, "Le login doit faire au moins 3 caractères")
      .required("Le login est requis"),
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Input name="login" type="text" placeholder="Votre login" />
        <Button type="submit">S'inscrire</Button>
      </Form >
    </Formik >
  );
};

export default connect(
  (state) => ({ logged: state.user.logged }),
  { registerUser }
)(Regsiter);
