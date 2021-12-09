
// dependencies
import React from "react";

// presentation
import { InsertStudentPresentational } from "./presentation";

// api
import { post } from '../../../../common/main/infra';

export function InsertStudent(props) {
  const {
    studentsList,
    setInsertStudentModalIsActive,
    fetchStudentsList,
  } = props;

  const [shift, setShift] = React.useState("");

  function onShiftInputChange(event) {
    setShift(event?.target?.value);
  }

  const [enrollment, setEnrollment] = React.useState("");

  function onEnrollmentInputChange(event) {
    setEnrollment(event?.target?.value);
  }

  const [name, setName] = React.useState("");

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [studentClass, setStudentClass] = React.useState("");

  function onClassInputChange(event) {
    setStudentClass(event?.target?.value);
  }

  const [phone, setPhone] = React.useState("");

  function onPhoneInputChange(event) {
    setPhone(event?.target?.value);
  }

  const [email, setEmail] = React.useState("");

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [login, setLogin] = React.useState("");

  function onLoginInputChange(event) {
    setLogin(event?.target?.value);
  }

  const [password, setPassword] = React.useState("");

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  const [cpf, setCpf] = React.useState('');

  function onCpfInputChange(event) {
    setCpf(event?.target?.value);
  }

  function enrollmentAlreadyExists() {
    const enrollmentAlreadyExists = studentsList.some((student) => {
      return student.enrollment === parseFloat(enrollment);
    });

    if (enrollmentAlreadyExists) {
      alert("Já existe um aluno com esta matricula.");
      return enrollmentAlreadyExists;
    }

    return enrollmentAlreadyExists;
  }

  async function onSubmit() {
    const error = enrollmentAlreadyExists();

    if (error) return;

    const payload = new FormData();

    payload.set('enrollment', enrollment);
    payload.set('student_class', studentClass);
    payload.set('shift', shift);
    payload.set('balance', 0);
    payload.set('responsible_cpf', cpf);
    payload.set('name', name);
    payload.set('phone_number', phone);
    payload.set('email', email);
    payload.set('login', login);
    payload.set('password', password);
    payload.set('access_level', 3);

    await post('/food_club_api/public_html/api/student', { data: payload }).then(() => {
      setInsertStudentModalIsActive(false);
      fetchStudentsList();
    });
  }

  return React.createElement(InsertStudentPresentational, {
    shift,
    enrollment,
    name,
    studentClass,
    phone,
    email,
    login,
    password,

    onShiftInputChange,
    onEnrollmentInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onCpfInputChange,
    onSubmit,

    setInsertStudentModalIsActive,
  });
}
