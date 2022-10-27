import { Box, Checkbox, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ToggleButton, ToggleButtonGroup} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';
import PublicityButton, { Publicity } from './publicityButton';
import StatusButton, { Status } from './statusButton';

const calenderPermissionList = () => {
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
    <Grid container sx={{ width: '100%', bgcolor: 'background.paper' }} direction="column">
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <Grid key={value} item>
            <Box sx={{ borderBottom: 1 }}>
                <Grid
                    container
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        {`カレンダー ${value + 1}`}
                    </Grid>
                    <Grid item xs={6} sx={{p: 1}}>
                        <Grid container direction="column" alignContent="end">
                            <Grid item xs={9}>
                                <StatusButton status={'ok'} setStatus={function (status: Status) {
                                throw new Error('Function not implemented.');
                                } }></StatusButton>
                            </Grid>
                            <Grid item xs={3} sx={{paddingTop: 1}}>
                                <PublicityButton status={'all'} setStatus={function (status: Publicity) {
                                throw new Error('Function not implemented.');
                                } }></PublicityButton>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  )
}

export default calenderPermissionList