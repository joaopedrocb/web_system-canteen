import { UpdateResponsiblePresentational } from './presentation'
import React from 'react';
import { LocalStorageAdapter } from '../../../infra'
import { RESPONSIBLES_LIST } from '../../../constants/domain/storageKeys';
import { AccessLevel } from '../../../enums';

export function UpdateResponsible(responsible) {
  const storage = new LocalStorageAdapter()

  const responsiblesList = storage.getItem(RESPONSIBLES_LIST);
  
  const [name, setName] = React.useState('');

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [phone, setPhone] = React.useState('');

  function onPhoneInputChange(event) {
    setPhone(event?.target?.value);
  }

  const [email, setEmail] = React.useState('');

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [login, setLogin] = React.useState('');

  function onLoginInputChange(event) {
    setLogin(event?.target?.value);
  }

  const [password, setPassword] = React.useState('');

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
      accessLevel: AccessLevel.RESPONSIBLE
    }
    
    const updatedIndex = responsiblesList.findIndex(item => item.cpf === responsible.cpf)

    const newList = responsiblesList[updatedIndex] = updatedResponsible;

    storage.setItem(RESPONSIBLES_LIST, [newList]);
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
    onSubmit
  })
}