// dependencies
import React from "react";
import { useHistory } from "react-router-dom";

// presentation
import LoginPagePresentation from "./presentation";

// models
import { Responsible, Staff, Student } from '../../models';

export function LoginPage(props) {
  const { userData, changeUserData } = props;

  const history = useHistory();

  React.useLayoutEffect(() => {
    if (userData) {
      history.push("/");

      return;
    }
  }, [ history, userData]);

  const [email, setEmail] = React.useState("");

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [password, setPassword] = React.useState("");

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  function onLoginSubmit() {
    if (email === 'funcionario@unifacs.com') {
      const responsible = new Responsible();

      changeUserData(responsible);
      history.push('/gerenciamento/produtos');
      document.window.reload();
    }

    // if (em)
  }


  return React.createElement(LoginPagePresentation, {
    email,
    password,
    
    onLoginSubmit,
    onEmailInputChange,
    onPasswordInputChange,
  });
}
