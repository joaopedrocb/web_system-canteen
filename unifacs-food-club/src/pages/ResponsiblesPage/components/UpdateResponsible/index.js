// dependencies
import React from "react";

// presentation
import { UpdateResponsiblePresentational } from "./presentation";

// api
import { post } from "../../../../common/main/infra";

export function UpdateResponsible({
  responsible,
  cpf,
  setUpdateResponsibleModalIsActive,
  fetchResponsiblesList,
}) {
  const [name, setName] = React.useState(responsible.name);

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [phone, setPhone] = React.useState(responsible.phone);

  function onPhoneInputChange(event) {
    setPhone(event?.target?.value);
  }

  const [email, setEmail] = React.useState(responsible.email);

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [login, setLogin] = React.useState(responsible.login);

  function onLoginInputChange(event) {
    setLogin(event?.target?.value);
  }

  const [password, setPassword] = React.useState(responsible.password);

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  async function onSubmit() {
    const payload = new FormData();

    payload.set('name', name);
    payload.set('phone_number', phone);
    payload.set('email', email);
    payload.set('login', login);
    payload.set('password', password);

    await post(`/food_club_api/public_html/api/responsible/${cpf}`, {data: payload}).then(() => {
      setUpdateResponsibleModalIsActive(false);
      fetchResponsiblesList();
    })
  }

  return React.createElement(UpdateResponsiblePresentational, {
    responsible,
    name,
    phone,
    email,
    login,
    password,

    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,

    setUpdateResponsibleModalIsActive,
  });
}
