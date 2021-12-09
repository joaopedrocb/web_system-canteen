// dependencies
import React from "react";
import { useHistory } from "react-router-dom";

// presentation
import LoginPagePresentation from "./presentation";

// api
import { post } from "../../common/main/infra";

export function LoginPage() {
  const history = useHistory();

  const [email, setEmail] = React.useState("");

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [password, setPassword] = React.useState("");

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  async function onLoginSubmit() {
    const payload = new FormData();

    payload.set('email', email);
    payload.set('password', password);

    await post(`/food_club_api/public_html/api/login`, { data: payload }).then((response) => {
      if (response?.data?.status === 'success') {
        if (response?.data?.data.access_level === '3') {
          history.push('/comprar');

          localStorage.setItem('userData', '');
          localStorage.setItem('userData', JSON.stringify(response?.data.data));

          return;
        }

        history.push('/gerenciamento/produtos');

        localStorage.setItem('userData', '');
        localStorage.setItem('userData', JSON.stringify(response?.data.data));
      }
    });

  }

  return React.createElement(LoginPagePresentation, {
    email,
    password,

    onLoginSubmit,
    onEmailInputChange,
    onPasswordInputChange,
  });
}
