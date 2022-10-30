import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PublicityButton, { Publicity } from '../button/publicityButton';
import StatusButton, { Availability } from '../button/statusButton';
import { Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import CheckboxCalenderList from '../list/checkboxCalenderList';

export type addConditionState = {
  open: boolean
  calander: number
  allCalender: boolean
  availability: Availability
  publicity: Publicity
  query: string
}

export type addConditionProps = {
    state: addConditionState,
    setState: (state: addConditionState) => any
}

const FormDialog = (prop: addConditionProps) => {
  const {state} = prop
  const setState = (newState: Partial<addConditionState>) => {
    prop.setState({...state, ...newState});
  }
  const handleClose = () => {
    setState({open: false});
  };
  const handleAllCarander = (event: SelectChangeEvent<string>) => {
    setState({allCalender: event.target.value === "all"});
  }
  const handleTextInput = (event: any, value: string) => {
    setState({query: value})
  }


  return (
      <Dialog open={state.open} onClose={handleClose}>
        <DialogTitle>条件を追加</DialogTitle>
        <DialogContent>
          <DialogContentText>
            クエリの文字列が含まれる予定を対象として都合と公開範囲を上書きします。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="クエリ"
            type="email"
            fullWidth
            variant="standard"
            sx={{p: 1}}
          />

          <Typography color="textSecondary">　</Typography>
          <Typography color="textSecondary">検索対象カレンダー</Typography>

             <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.allCalender ? "all" : "selected"}
                    onChange={handleAllCarander}
                >
                    <MenuItem value="all">すべてのカレンダー</MenuItem>
                    <MenuItem value="selected">カレンダー指定</MenuItem>
                </Select>
             </FormControl>


             <CheckboxCalenderList open={!state.allCalender} index={state.calander} setIndex={(index) => {setState({calander: index})}}/>
          <Divider/>

          <Typography color="textSecondary"/>
          <Typography color="textSecondary">都合</Typography>
          <StatusButton status={state.availability} setStatus={(availability) => {setState({availability})}} />
          <Typography color="textSecondary"/>
          <Typography color="textSecondary">公開範囲</Typography>
          <PublicityButton status={state.publicity} setStatus={(publicity) => setState({publicity})} />
          <Typography color="textSecondary"/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>登録</Button>
          <Button onClick={handleClose}>キャンセル</Button>
        </DialogActions>
      </Dialog>
  );
}

export default FormDialog;
