import { FilledInput, FormControl, InputLabel } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import React from 'react'

export const FieldText = ({errors,name,label,variant="outlined"}) => {
 
  return (
    <>
      <Field name={name}>
        {({ field }) => (
          <FormControl
           
            sx={{ m: 1, width: "25ch" }}
            variant={variant}
            style={{ width: "100%" }}
            error={ errors[name] ? true:false}
          >
            <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
            <FilledInput
              {...field}
              id="filled-adornment-password"
              type="text"
            />
          </FormControl>
        )}
      </Field>
      <ErrorMessage name={name}>
        {(mensaje) => <div className="text-danger ms-2">{mensaje}</div>}
      </ErrorMessage>
    </>
  );
}

FieldText.defaultProps= {
    name:'',
    error:{}
}