import React from 'react';

type ConfirmationProps = {
  confirmAction: () => void;
  cancelAction: () => void;
};

const ConfirmationDialog = ({
  confirmAction,
  cancelAction,
}: ConfirmationProps) => (
  <div>
    <p>Are you sure you want to proceed?</p>
    <button onClick={confirmAction}>Yes</button>
    <button onClick={cancelAction}>No</button>
  </div>
);

export default ConfirmationDialog;