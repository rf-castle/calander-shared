import { Box, Checkbox, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ToggleButton, ToggleButtonGroup} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';
import PublicityButton, { Publicity, publicityButtonProps } from '../button/publicityButton';
import StatusButton, { Status, statusButtonProps } from '../button/statusButton';

const calenderPermissionList = () => {
  
  return (
    <Grid container sx={{ width: '100%', bgcolor: 'background.paper' }} direction="column">
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <Grid key={value} item>
            <Box sx={{ borderBottom: "dotted", borderColor: "#222222" }}>
                <Grid
                    container
                    alignItems="center"
                    sx={{p: 1}}
                >
                    <Grid item xs={6}>
                        {`カレンダーあああああああああああああああああああああああああああああああああああああああああああ ${value + 1}`}
                    </Grid>
                    <Grid item xs={6} sx={{p: 1}}>
                        <Grid container direction="column" minWidth="250px">
                            <Grid item sx={{paddingTop: 2}}>
                                <StatusButton status={'ok'} setStatus={function (status: Status) {
                                    throw new Error('Function not implemented.');
                                    } }></StatusButton>
                            </Grid>
                            <Grid item sx={{paddingTop: 1}}>
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