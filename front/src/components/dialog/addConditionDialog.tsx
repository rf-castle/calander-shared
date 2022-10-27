import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PublicityButton, { Publicity } from '../button/publicityButton';
import StatusButton, { Status } from '../button/statusButton';
import { Divider, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import CheckboxCalenderList from '../list/checkboxCalenderList';

export type addConditionProps = {
    open: boolean
    setOpen: (isOpen: boolean) => any
}

const FormDialog = (prop: addConditionProps) => {

  const handleClose = () => {
    prop.setOpen(false);
  };

  return (
      <Dialog open={prop.open} onClose={handleClose}>
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
                    value="selected"
                >
                    <MenuItem value="all">すべてのカレンダー</MenuItem>
                    <MenuItem value="selected">カレンダー指定</MenuItem>
                </Select>
             </FormControl>


             <CheckboxCalenderList/>
          <Divider/>

          <Typography color="textSecondary">　</Typography>
          <Typography color="textSecondary">都合</Typography>
          <StatusButton status={'ok'} setStatus={function (status: Status) {
                  throw new Error('Function not implemented.');
              } } />
          <Typography color="textSecondary">　</Typography>
          <Typography color="textSecondary">公開範囲</Typography>
          <PublicityButton status={'all'} setStatus={function (status: Publicity) {
                  throw new Error('Function not implemented.');
              } } />
          <Typography color="textSecondary">　</Typography>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>登録</Button>
          <Button onClick={handleClose}>キャンセル</Button>
        </DialogActions>
      </Dialog>
  );
}

export default FormDialog;
