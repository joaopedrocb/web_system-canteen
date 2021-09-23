import { InsertResponsiblePresentational } from './presentation'
import React from 'react';
import { LocalStorageAdapter } from '../../../infra'
import { RESPONSIBLES_LIST } from '../../../constants/domain/storageKeys';
import { AccessLevel } from '../../../enums';

export function InsertResponsible() {
  const storage = new LocalStorageAdapter()

  const responsiblesList = storage.getItem(RESPONSIBLES_LIST);

  const [cpf, setCpf] = React.useState('');

  function onCPFInputChange(event) {
    setCpf(event?.target?.value);
  }
  
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

  function cpfAlreadyExists() {
    const cpfAlreadyExists = responsiblesList.some(responsible => {
      return responsible.cpf === parseFloat(cpf)
    })

    if (cpfAlreadyExists) {
      alert('Já existe um aluno com esta matricula.')
      return cpfAlreadyExists
    }

    return cpfAlreadyExists
  }


  function onSubmit() {
    const error = cpfAlreadyExists();
    
    if (!error) {

      const newList = [...responsiblesList, {
        cpf,
        name,
        phoneNumber: phone,
        email,
        login,
        password,
        accessLevel: AccessLevel.RESPONSIBLE
      }]

      storage.setItem(RESPONSIBLES_LIST, [...newList])
      return;
    }
  }

  return React.createElement(InsertResponsiblePresentational, {
    cpf,
    name,
    phone,
    email,
    login,
    password,

    onCPFInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,
  })
}