import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
