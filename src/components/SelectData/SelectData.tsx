import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const SelectData = ({ data, onChange, answer }: any) => {
  const [sex, setSex] = useState(answer?.value || '');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newData: string
  ) => {
    setSex(newData);
    onChange({
      id: data.id,
      value: newData,
    });
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={sex}
      exclusive
      onChange={handleChange}
      aria-label='Sex'
    >
      <ToggleButton value='male'>Male</ToggleButton>
      <ToggleButton value='female'>Female</ToggleButton>
    </ToggleButtonGroup>
  );
};
