import React from "react";
import { useField } from 'formik'
import { FormCheck, FormControl } from "react-bootstrap";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (

    <div>
      <label className="checkbox-input">
        <FormCheck
          name={props.id || props.name}
          id={props.id || props.name}
          isInvalid={meta.touched && meta.error}
          isValid={meta.touched && !meta.error}
          {...field}
          {...props}
        />{children}</label>
      {meta.touched && meta.errors &&
        <FormControl.Feedback type="invalid" className="error">
          {meta.errors}
        </FormControl.Feedback>
      }
    </div>
  );
};

export default Checkbox;
