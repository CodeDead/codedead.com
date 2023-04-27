import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const AlertDialog = ({
  title, content, ok, onClose, onAccept,
}) => {
  const [open, setOpen] = useState(true);

  /**
   * Close the AlertDialog instance
   */
  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  /**
   * Handle the accept button
   */
  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAccept} color="primary" variant="outlined" autoFocus>
          {ok}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
