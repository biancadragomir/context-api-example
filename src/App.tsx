import React from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import {
  ConfirmationDialogProvider,
  useConfirmationDialog,
} from "./ConfirmationDialogContext";

const ConfirmationExample = () => {
  const { isOpen, setDialogState, confirmAction } = useConfirmationDialog();

  const handleButtonClick = () => {
    setDialogState({
      isOpen: true,
      confirmAction: () => console.log("Confirmed"),
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Confirmation Dialog</button>
      {isOpen && (
        <ConfirmationDialog
          confirmAction={confirmAction}
          cancelAction={() =>
            setDialogState({ isOpen: false, confirmAction: () => null })
          }
        />
      )}
    </div>
  );
};

const App = () => (
  <ConfirmationDialogProvider>
    <ConfirmationExample />
  </ConfirmationDialogProvider>
);

export default App;
