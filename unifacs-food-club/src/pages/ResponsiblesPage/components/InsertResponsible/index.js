import { InsertResponsiblePresentational } from './presentation'
import React from 'react';

//enums
import { AccessLevelEnum } from '../../../../common/domain';

export function InsertResponsible({ responsiblesList, updateResponsibles, setInsertResponsibleModalIsActive }) {

  const [cpf, setCpf] = React.useState('');

  function onCPFInputChange(event) {
    const formattedCpf = event?.target?.value.replace(/\D/g, '') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')

    setCpf(formattedCpf);
  }
  
  const [name, setName] = React.useState('');

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [phone, setPhone] = React.useState('');

  function onPhoneInputChange(event) {
    const formattedPhone = event?.target?.value.replace(
        /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
      );

    setPhone(formattedPhone);
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
        accessLevel: AccessLevelEnum.RESPONSIBLE
      }]

      updateResponsibles(newList);
      setInsertResponsibleModalIsActive(false);
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

    setInsertResponsibleModalIsActive
  })
}