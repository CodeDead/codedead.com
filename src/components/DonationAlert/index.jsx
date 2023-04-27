import React from 'react';
import { navigate } from 'gatsby';
import AlertDialog from '../AlertDialog';

const DonationAlert = ({ onClose }) => {
  /**
   * Navigate to the donations page
   */
  const navigateToDonate = () => {
    navigate('/donate');
  };

  return (
    <AlertDialog
      title="Like our software?"
      content="If you like our software, please consider donating to help us keep the servers running. We are not a company, we are just a group of people who like to code. We do not have any income from our software projects, so we have to pay for the servers ourselves. We would really appreciate it if you could help us out!"
      ok="Donate"
      onAccept={navigateToDonate}
      onClose={onClose}
    />
  );
};

export default DonationAlert;
