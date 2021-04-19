import Checkbox from "components/Checkbox";
import Input from "components/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

import * as Yup from 'yup'

const Regsiter = () => {

  const initialValues = {
    login: '',
    email: '',
    cgu: false
  }
  const onSubmit = formValues => { console.log(formValues) }
  const validationSchema = Yup.object({
    login: Yup.string()
      .min(3, "Le login doit faire au moins 3 caractères")
      .required("Le login est requis"),
    email: Yup.string()
      .email("L'adresse mail doit être valide")
      .required("L'adresse mail est requise"),
    cgu: Yup.bool().equals([true], "Merci de valider les CGU"),
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Input name="login" type="text" placeholder="Votre login" />
        <Input name="email" type="email" placeholder="Votre email" />
        <Checkbox name="cgu" type="checkbox">Acceptez-vous les CGU ?</Checkbox>
        <button type="submit">S'inscrire</button>
      </Form >

    </Formik >

  );
};

export default Regsiter;
