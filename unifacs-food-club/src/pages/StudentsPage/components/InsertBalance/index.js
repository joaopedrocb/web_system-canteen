import React from "react";

import { InsertBalancePresentational } from "./presentation";

export function InsertBalance({
  student,
  updateStudents,
  setInsertBalanceModalIsActive,
}) {
  const [balance, setBalance] = React.useState();

  function onBalanceInputChange(event) {
    setBalance(event?.target?.value);
  }

  function onSubmit() {
    alert(`R$ ${balance} depositado na conta de ${student.name}, obrigado!`);
    setInsertBalanceModalIsActive(false);
  }

  return React.createElement(InsertBalancePresentational, {
    balance,

    studentName: student.name,
    studentEnrollment: student.enrollment,
    currentBalance: student.balance,

    onSubmit,
    onBalanceInputChange,

    setInsertBalanceModalIsActive,
  });
}
