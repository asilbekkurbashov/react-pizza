import { useAppDispatch } from "@/hooks/useRedux";
import { PizzaActions } from "@/store/pizza/PizzaSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

interface I_Props {
  title: string;
  text: string;
}

function MuiDiaolog(props: I_Props) {
  const dispatch = useAppDispatch();
  const { title, text } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const Confirm = (value: string) => {
    if (value === "Закладка") {
      dispatch(PizzaActions.setClearFavourite());
    }else {
      dispatch(PizzaActions.setClearDeliver())
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleClickOpen}
        color="warning"
        startIcon={<MdDeleteSweep />}
      >
        Очистить {text}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите очистить {text}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>ОТМЕНА</Button>
          <Button onClick={() => Confirm(title)}>ДА</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MuiDiaolog;
