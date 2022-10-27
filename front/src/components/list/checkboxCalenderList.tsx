import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup} from '@mui/material';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import React, {PropsWithChildren} from 'react';

const checkboxCalenderList = () => {

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
                key={value}
                disablePadding
            >
                <ListItemButton role={undefined}>
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                    <ListItemText id={labelId} primary={`カレンダー ${value + 1}`}/>
                </ListItemButton>
            </ListItem>
            );
        })}
        </List>
    )
}

export default checkboxCalenderList