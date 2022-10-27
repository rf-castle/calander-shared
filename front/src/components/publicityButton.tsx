import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import React from 'react';

export type Publicity = 'all' | 'existOnly'
export type statusButtonProps = {
  status: Publicity,
  setStatus: (status: Publicity) => any
}
const publicityButton = (props: statusButtonProps) => {
  const {status, setStatus} = props;
  const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: Publicity,
  ) => {
    if(newAlignment !== null){
      setStatus(newAlignment);
    }
  };
  return (
      <ToggleButtonGroup
          value={status}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          fullWidth
      >
        <ToggleButton value='all'>
          すべて公開
        </ToggleButton>
        <ToggleButton value='existOnly'>
          ありなし公開
        </ToggleButton>
      </ToggleButtonGroup>

  )
}

export default publicityButton