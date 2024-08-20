import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioList = ({ data, onChange, answer }: any) => {
  const [value, setValue] = React.useState(answer?.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    setValue(selectedValue);
    onChange({
      id: data.id,
      value: selectedValue,
    });
  };

  return (
    <FormControl>
      <FormLabel id='radio-list-group'>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby='radio-list-group'
        name='radio-list-group-name'
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
        <FormControlLabel value='no' control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  );
};
