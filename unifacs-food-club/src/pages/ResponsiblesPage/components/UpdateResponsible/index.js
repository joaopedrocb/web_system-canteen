import React from "react";

import { UpdateResponsiblePresentational } from "./presentation";

// enums
import { AccessLevelEnum } from "../../../../common/domain";

export function UpdateResponsible({
  responsible,
  updateResponsibles,
  setUpdateResponsibleModalIsActive,
}) {
  const [name, setName] = React.useState("");

  function onNameInputChange(event) {
    setName(event?.target?.value);
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

  function onSubmit() {
    const updatedResponsible = {
      cpf: responsible.cpf,
      name,
      phoneNumber: phone,
      email,
      login,
      password,
      accessLevel: AccessLevelEnum.RESPONSIBLE,
    };

    updateResponsibles((prevResponsiblesList) => {
      const updatedIndex = prevResponsiblesList.findIndex(
        (item) => item.cpf === responsible.cpf
      );
    });
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
