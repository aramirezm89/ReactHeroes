import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { Field } from 'formik';


export const SelectField = ({name,options,label,variant="standard"}) => {
    
  return (
    <Field as="select" name={name}>
      {({ field }) => (
        <FormControl fullWidth name={name} variant={variant}>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            {...field}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
           
          >
       
            {options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Field>
  );
}
