// dependencies
import React from "react";

// presentation
import { UpdateStudentPresentational } from "./presentation";

// api
import { post } from '../../../../common/main/infra'

export function UpdateStudent(props) {
  const {
    student,
    setUpdateResponsibleModalIsActive,
    fetchStudentsList,
  } = props;

  const [shift, setShift] = React.useState(student.shift);

  function onShiftInputChange(event) {
    setShift(event?.target?.value);
  }

  const [name, setName] = React.useState(student.name);

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [studentClass, setStudentClass] = React.useState(student.studentClass);

  function onClassInputChange(event) {
    setStudentClass(event?.target?.value);
  }

  const [phone, setPhone] = React.useState(student.phone);

  function onPhoneInputChange(event) {
    setPhone(event?.target?.value);
  }

  const [email, setEmail] = React.useState(student.login);

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [login, setLogin] = React.useState(student.login);

  function onLoginInputChange(event) {
    setLogin(event?.target?.value);
  }

  const [password, setPassword] = React.useState(student.password);

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  const [cpf, setCpf] = React.useState(student.cpf);

  function onCpfInputChange(event) {
    setCpf(event?.target?.value);
  }

  async function onSubmit() {
    const payload = new FormData();

    payload.set('student_class', studentClass);
    payload.set('shift', shift);
    payload.set('name', name);
    payload.set('phone_number', phone);
    payload.set('email', email);
    payload.set('login', login);
    payload.set('password', password);
    payload.set('responsible_cpf', cpf);
    payload.set('balance', student.balance);

    await post(`/food_club_api/public_html/api/student/${student.enrollment}`,  { data: payload }).then(
      () => {
        setUpdateResponsibleModalIsActive(false);
        fetchStudentsList();
      }
    );
  }

  return React.createElement(UpdateStudentPresentational, {
    student,
    shift,
    name,
    studentClass,
    phone,
    email,
    login,
    password,

    onShiftInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onCpfInputChange,
    onSubmit,

    setUpdateResponsibleModalIsActive,
  });
}
