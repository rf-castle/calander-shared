import { Button } from "@mui/material";
import React from "react"
import AddConditionDialog from "../../components/dialog/addConditionDialog";
import SharedRoomList from '../../components/list/sharedRoomList';

const testPage = () => {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        「条件を追加」ダイアログを開く
      </Button>
      <AddConditionDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default testPage