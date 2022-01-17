import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { navigate } from 'gatsby';

const BackButton = ({ disabled, style }) => {
  /**
   * Go back to the previous page
   */
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={goBack}
      style={style}
      disabled={disabled}
    >
      <ArrowBackIcon />
    </Button>
  );
};

export default BackButton;
