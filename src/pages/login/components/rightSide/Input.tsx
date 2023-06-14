import React, { ReactElement } from 'react';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const endAdornment = (
  <InputAdornment position="end">
    <IconButton
      aria-label="toggle password visibility"
      onClick={() => { }}
      onMouseDown={() => { }}
      edge="end"
    >
      {true ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment>
)

interface InputProps {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'password';
  prefixIcon: ReactElement;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default (props: InputProps) => {
  const { id, label, name, type, prefixIcon, onChange } = props;

  return (
    <FormControl
      fullWidth
      variant="filled"
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <FilledInput
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        startAdornment={prefixIcon && <InputAdornment position="start">
          {prefixIcon}
        </InputAdornment>}
        endAdornment={
          type === 'password' ? endAdornment : null
        }
      />
    </FormControl>
  );
}