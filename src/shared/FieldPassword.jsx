import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";

export const FieldPassword = ({name,errors}) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Field name={name}>
        {({ field }) => (
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="filled"
            style={{ width: "100%" }}
            error={errors[name] ? true:false}
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              {...field}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      </Field>
      <ErrorMessage name={name}>
        {(mensaje) => <div className="text-danger ms-2">{mensaje}</div>}
      </ErrorMessage>
    </>
  );
};


FieldPassword.defaultProps = {
    name:'',
    errors:{}
}