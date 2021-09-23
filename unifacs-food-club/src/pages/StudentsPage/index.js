// dependencies
import React from "react";

// presentation
import StudentsPagePresentation from "./presentation";

// infra
import { LocalStorageAdapter } from "../../infra";

// constants
import { STUDENTS_LIST } from "../../constants/domain/storageKeys";

export function StudentsPage() {
  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []);

  const _studentsList = storage.getItem(STUDENTS_LIST);

  const [studentsList, setStudentsList] =
    React.useState(_studentsList);

  React.useEffect(() => {
    if (studentsList.length !== storage.getItem(STUDENTS_LIST).length) {
      setStudentsList(storage.getItem(STUDENTS_LIST));
    }
  }, [studentsList.length, storage]);

  return React.createElement(StudentsPagePresentation, { studentsList });
}
