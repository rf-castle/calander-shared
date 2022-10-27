import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import React, {PropsWithChildren} from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';

export type Status = 'ok' | 'soso' | 'ng' | 'ignore'
export type statusButtonProps = {
  status: Status
  setStatus: (status: Status) => any
}
const statusButtons = (props: statusButtonProps) => {
  const {status, setStatus} = props;
  const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: Status,
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

export default statusButtons