import React, { ReactNode, useState } from "react";

type ConfirmationDialogState = {
  isOpen: boolean;
  confirmAction: () => void;
};

type ConfirmationDialogContextValue = {
  setDialogState: (state: ConfirmationDialogState) => void;
} & ConfirmationDialogState;

const ConfirmationDialogContext = React.createContext<
  ConfirmationDialogContextValue | undefined
>(undefined);

export const ConfirmationDialogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dialogState, setDialogState] = useState<ConfirmationDialogState>({
    isOpen: false,
    confirmAction: () => null,
  });

  const confirmAction = () => {
    dialogState.confirmAction && dialogState.confirmAction();
    setDialogState({ isOpen: false, confirmAction: () => null });
  };

  return (
    <ConfirmationDialogContext.Provider
      value={{ ...dialogState, setDialogState, confirmAction }}
    >
      {children}
    </ConfirmationDialogContext.Provider>
  );
};

export const useConfirmationDialog = () => {
  const context = React.useContext(ConfirmationDialogContext);
  if (!context) {
    throw new Error(
      "useConfirmationDialog must be used within a ConfirmationDialogProvider"
    );
  }
  return context;
};
