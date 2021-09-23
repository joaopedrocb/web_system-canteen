// dependencies
import React from "react";
import { useHistory } from "react-router-dom";

// presentation
import { default as LoginPagePresentation } from "./presentation";

// models
import { Responsible, Staff, Student } from "../../models";

// infra
import { LocalStorageAdapter } from "../../infra";

// constants
import { LOGGED_USER } from "../../constants";

export function LoginPage() {
  const history = useHistory();

  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []);

  const responsible = new Responsible();

  const student = new Student();

  const staff = new Staff();

  const validResponsibleEmail = responsible.email;

  const validStudentEmail = student.email;

  const validStaffEmail = staff.email;

  const [hasALoggedUser, setHasALoggedUser] = React.useState(false);

  React.useEffect(() => {
    const loggedUser = storage.getItem(LOGGED_USER);

    if (loggedUser) {
      setHasALoggedUser(true);
      return;
    }

    setHasALoggedUser(false);
  }, [storage]);

  React.useEffect(() => {
    if (hasALoggedUser) {
      history.push("/");
    }
  }, [hasALoggedUser, history]);

  React.useLayoutEffect(() => {
    const loggedUser = storage.getItem(LOGGED_USER);

    if (loggedUser) {
      history.push("./");

      return;
    }
  }, [history, storage]);

  function saveResponsible() {
    const {
      cpf,
      name,
      phoneNumber,
      email,
      login,
      password,
      studentsEnrollment,
      accessLevel,
    } = responsible;

    storage.setItem(LOGGED_USER, {
      cpf,
      name,
      phoneNumber,
      email,
      login,
      password,
      studentsEnrollment,
      accessLevel,
    });
  }

  function saveStudent() {
    const {
      studentEnrollment,
      studentClass,
      shift,
      name,
      phoneNumber,
      email,
      login,
      password,
      responsibleCpf,
      balance,
      accessLevel,
    } = student;

    storage.setItem(LOGGED_USER, {
      studentEnrollment,
      studentClass,
      shift,
      name,
      phoneNumber,
      email,
      login,
      password,
      responsibleCpf,
      balance,
      accessLevel,
    });
  }

  function saveStaff() {
    const { name, adress, phoneNumber, email, accessLevel } = staff;

    storage.setItem(LOGGED_USER, {
      name,
      adress,
      phoneNumber,
      email,
      accessLevel,
    });
  }

  function onClickLogin() {
    if (email === validResponsibleEmail && password === "123123") {
      saveResponsible();
      document.window.reload();
      history.push("/gerenciamento/produtos");

      return;
    }

    if (email === validStudentEmail && password === "123123") {
      saveStudent();
      document.window.reload();
      history.push("/gerenciamento/produtos");

      return;
    }

    if (email === validStaffEmail && password === "123123") {
      saveStaff();
      document.window.reload();
      history.push("/gerenciamento/produtos");

      return;
    }

    setTimeout(() => alert("Essa conta não existe"), 2000);
  }

  const [email, setEmail] = React.useState("");

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [password, setPassword] = React.useState("");

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  return React.createElement(LoginPagePresentation, {
    email,
    password,

    onClickLogin,
    onEmailInputChange,
    onPasswordInputChange,
  });
}
