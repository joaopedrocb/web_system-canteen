// dependencies
import React from "react";

// presentation
import ResponsiblesPagePresentation from "./presentation";

// infra
import { LocalStorageAdapter } from "../../infra";


export function ResponsiblesPage() {
  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []);

  const _responsiblesList = storage.getItem();

  const [responsiblesList, setResponsiblesList] =
    React.useState(_responsiblesList);

  React.useEffect(() => {
    if (responsiblesList.length !== storage.getItem().length) {
      setResponsiblesList(storage.getItem());
    }
  }, [responsiblesList.length, storage]);

  return React.createElement(ResponsiblesPagePresentation, { responsiblesList });
}
