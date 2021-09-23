// dependencies
import React from "react";

// presentation
import ResponsiblesPagePresentation from "./presentation";

// infra
import { LocalStorageAdapter } from "../../infra";

// constants
import { RESPONSIBLES_LIST } from "../../constants/domain/storageKeys";

export function ResponsiblesPage() {
  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []);

  const _responsiblesList = storage.getItem(RESPONSIBLES_LIST);

  const [responsiblesList, setResponsiblesList] =
    React.useState(_responsiblesList);

  React.useEffect(() => {
    if (responsiblesList.length !== storage.getItem(RESPONSIBLES_LIST).length) {
      setResponsiblesList(storage.getItem(RESPONSIBLES_LIST));
    }
  }, [responsiblesList.length, storage]);

  return React.createElement(ResponsiblesPagePresentation, { responsiblesList });
}
