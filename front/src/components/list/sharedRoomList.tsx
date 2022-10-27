import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';

const sharedRoomList = () => {
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
            <ListItemButton role={undefined}>
              <ListItemText id={labelId} primary={`ルーム ${value + 1}`}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  )
}

export default sharedRoomList