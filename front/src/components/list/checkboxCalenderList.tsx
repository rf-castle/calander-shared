import { Checkbox, FormControl, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';

export type checkboxCalenderListProps = {
    open: boolean
    index: number
    setIndex: (index: number) => any
}

const checkboxCalenderList = (props: checkboxCalenderListProps) => {
    const calenderNames =[1, 2, 3, 4].map((value) => `カレンダー${value}`)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        props.setIndex(parseInt(value))
    }
    return (
        <FormControl>
            <RadioGroup
                sx={{ width: '100%', bgcolor: 'background.paper', display: props.open ? "inherit": "none"}}
                onChange={handleChange}
            >
            {calenderNames.map((value ,index)=>
                
                <FormControlLabel value={index} control={<Radio />} label={value} />
            )}
            </RadioGroup>
        </FormControl>
    )
}

export default checkboxCalenderList