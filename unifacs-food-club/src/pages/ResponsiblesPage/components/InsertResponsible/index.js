// dependencies
import React from 'react';

// presentation
import { InsertResponsiblePresentational } from './presentation';

// api
import { post } from '../../../../common/main/infra';

export function InsertResponsible({ responsiblesList, updateResponsibles, setInsertResponsibleModalIsActive, fetchResponsiblesList }) {

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


  async function onSubmit() {
    const error = cpfAlreadyExists();

    if (error) return;

    const payload = new FormData();
  
    payload.set('cpf', cpf.replace(/\D/g,''));
    payload.set('name', name);
    payload.set('phone_number', phone);
    payload.set('email', email);
    payload.set('login', login);
    payload.set('password', password);
    payload.set('access_level', 2);

    await post('/food_club_api/public_html/api/responsible', {data: payload}).then(() => {
      setInsertResponsibleModalIsActive(false);
      fetchResponsiblesList();
    });
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