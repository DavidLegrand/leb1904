import React from "react";
import { useField } from 'formik'
import { FormControl } from "react-bootstrap";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (

    <div>
      <FormControl
        className="text-input"
        name={props.id || props.name}
        id={props.id || props.name}
        isInvalid={meta.touched && meta.error}
        isValid={meta.touched && !meta.error}
        placeholder={props.placeholder || props.id || props.name}
        {...field}
        {...props} />
      {meta.touched && meta.error &&
        <FormControl.Feedback as="div" type="invalid" className="error">{meta.error}</FormControl.Feedback>
      }
    </div>
  );
};

export default Input;
