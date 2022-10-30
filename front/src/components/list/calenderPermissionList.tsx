import {Box, Grid} from '@mui/material';
import React, {useState} from 'react';
import PublicityButton, {Publicity} from '../button/publicityButton';
import StatusButton, {Availability} from '../button/statusButton';

const calenderPermissionList = () => {
  
  return (
    <Grid container sx={{ width: '100%', bgcolor: 'background.paper' }} direction="column">
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        const [status, setStatus] = useState<Availability>('ok');
        const [publicity, setPublicity] = useState<Publicity>('all');
        return (
          <Grid key={value} item>
            <Box sx={{ borderBottom: "dotted", borderColor: "#222222" }}>
                <Grid
                    container
                    alignItems="center"
                    sx={{p: 1}}
                >
                    <Grid item xs={6}>
                        {`カレンダー${value + 1}`}
                    </Grid>
                    <Grid item xs={6} sx={{p: 1}}>
                        <Grid container direction="column" minWidth="250px">
                            <Grid item sx={{paddingTop: 2}}>
                                <StatusButton status={status} setStatus={setStatus}/>
                            </Grid>
                            <Grid item sx={{paddingTop: 1}}>
                                <PublicityButton status={publicity} setStatus={setPublicity}></PublicityButton>
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