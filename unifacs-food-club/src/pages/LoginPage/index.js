// dependencies
import React from "react";
import { useHistory } from "react-router-dom";

// presentation
import LoginPagePresentation from "./presentation";

// models
import { Responsible, Staff, Student } from "../../models";

export function LoginPage(props) {
  const { changeUserData, setUserData } = props;

  const history = useHistory();

  const [email, setEmail] = React.useState("");

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [password, setPassword] = React.useState("");

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  function onLoginSubmit() {
    if (email === "funcionario@unifacs.com") {
      const staff = new Staff();

      changeUserData(staff);
      history.push("/gerenciamento/produtos");

      return;
    }

    if (email === "responsavel@unifacs.com") {
      const responsible = new Responsible();

      changeUserData(responsible);
      history.push("/gerenciamento/produtos");

      return;
    }

    if (email === "estudante@unifacs.com") {
      const student = new Student();

      changeUserData(student);
      history.push("/comprar");

      return;
    }
  }

  return React.createElement(LoginPagePresentation, {
    email,
    password,

    onLoginSubmit,
    onEmailInputChange,
    onPasswordInputChange,

    setUserData,
  });
}
