// dependencies
import React from "react";

// presentation
import StudentsPagePresentation from "./presentation";

// infra
import { LocalStorageAdapter } from "../../infra";


export function StudentsPage() {
  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []);

  const _studentsList = storage.getItem();

  const [studentsList, setStudentsList] =
    React.useState(_studentsList);

  React.useEffect(() => {
    if (studentsList.length !== storage.getItem().length) {
      setStudentsList(storage.getItem());
    }
  }, [studentsList.length, storage]);

  return React.createElement(StudentsPagePresentation, { studentsList });
}
