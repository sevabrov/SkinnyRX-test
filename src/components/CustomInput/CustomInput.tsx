import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const CustomInput = ({ data, onChange, answer }: any) => {
  const [value, setValue] = useState(answer?.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    setValue(selectedValue);
    onChange({
      id: data.id,
      value: selectedValue,
    });
  };
  return (
    <Box
      component='form'
      sx={{
        m: 1,
        width: '25ch',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='answer-basic'
        label='Answer'
        variant='standard'
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};
