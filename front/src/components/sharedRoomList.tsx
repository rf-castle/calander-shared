import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import statusButtons from './statusButtons';

const sharedRoomList = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            component="div"
            button={true}
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <NoMeetingRoomIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)}>
              <ListItemText id={labelId} primary={`ルーム ${value + 1}`}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  )
}

export default sharedRoomList