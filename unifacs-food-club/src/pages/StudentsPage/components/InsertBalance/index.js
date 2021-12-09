// dependencies
import React from "react";

// presentation
import { InsertBalancePresentational } from "./presentation";

// api
import { post } from '../../../../common/main/infra';

export function InsertBalance(props) {
  const {
    student,
    setInsertBalanceModalIsActive,
    fetchStudentsList,
  } = props;

  const [balance, setBalance] = React.useState();

  function onBalanceInputChange(event) {
    setBalance(event?.target?.value);
  }

  async function onSubmit() {
    await post(`/food_club_api/public_html/api/responsible/deposit/${student.enrollment}/${balance}`).then(() => {
      setInsertBalanceModalIsActive(false);
      fetchStudentsList();
    })
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
