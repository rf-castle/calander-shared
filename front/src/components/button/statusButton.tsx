import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import React, {PropsWithChildren} from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';

export type Availability = 'ok' | 'soso' | 'ng' | 'ignore'
export type AvailabilityButtonProps = {
  status: Availability
  setStatus: (status: Availability) => any
}
const statusButton = (props: AvailabilityButtonProps) => {
  const {status, setStatus} = props;
  const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: Availability,
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
        <ToggleButton value="ok">
          <RadioButtonUncheckedIcon/>
        </ToggleButton>
        <ToggleButton value="soso">
          <ChangeHistoryIcon/>
        </ToggleButton>
        <ToggleButton value="ng">
          <ClearIcon/>
        </ToggleButton>
        <ToggleButton value="ignore">
          <RemoveIcon/>
        </ToggleButton>
      </ToggleButtonGroup>

  )
}

export default statusButton