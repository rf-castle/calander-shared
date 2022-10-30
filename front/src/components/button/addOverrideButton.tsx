import React, {useState} from 'react'
import {Zoom, Box, Fab} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddConditionDialog, {addConditionState} from '../dialog/addConditionDialog';

const x = () => {
  const [state, setState] = useState<addConditionState>({
    open: false,
    allCalender: false,
    availability: 'ok',
    calander: 0,
    publicity: 'all',
    query: ''
  });
  const handleClick = () => {
    setState({...state, open: true})
  }

  return (
      <>
        <Zoom in={true} mountOnEnter unmountOnExit>
          <Box role="presentation" sx={{position: 'fixed', bottom: 32, right: 32}}>
            <Fab color="info" aria-label="show-feedback" onClick={handleClick}>
              <AddIcon/>
            </Fab>
          </Box>
        </Zoom>
        <AddConditionDialog state={state} setState={setState}/>
      </>


  )
}

export default x