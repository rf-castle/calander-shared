import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import React, {PropsWithChildren} from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';

const statusButtons = () => {
  const [value, setValue] = React.useState<string>('ok');

  const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
  ) => {
    if(newAlignment !== null){
      setValue(newAlignment);
    }
  };
  return (
      <ToggleButtonGroup
          value={value}
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