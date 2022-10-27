import { Box, Checkbox, Divider, Fab, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ToggleButton, ToggleButtonGroup, Zoom} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';
import PublicityButton, { Publicity, publicityButtonProps } from '../button/publicityButton';
import StatusButton, { Status, statusButtonProps } from '../button/statusButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';

const overrideConditionList = () => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: "100px" }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
    
            return (
              <ListItem
                component="div"
                button={true}
                key={value}
                secondaryAction={
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      '& svg': {
                        m: 1.5,
                      },
                      '& hr': {
                        mx: 0.5,
                      },
                    }}
                  >
                    <IconButton edge="end" aria-label="comments">
                      <KeyboardArrowUpIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="comments">
                      <KeyboardArrowDownIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton edge="end" aria-label="comments">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="comments">
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                }
                disablePadding
                sx={{p: 2}}
              >
                <ListItemButton role={undefined}>
                  <ListItemText id={labelId} primary={`「せいの」が含まれる場合, すべてのカレンダー, 空き, すべて公開 ${value + 1}`}/>
                </ListItemButton>
              </ListItem>
            );
          })}

          <Zoom in={true} mountOnEnter unmountOnExit>
            <Box role="presentation" sx={{position:"fixed",bottom:32,right:32}}>
              <Fab color="info" aria-label="show-feedback">
                <AddIcon />
              </Fab>
            </Box>
          </Zoom>
        </List>
      )
      
}

export default overrideConditionList