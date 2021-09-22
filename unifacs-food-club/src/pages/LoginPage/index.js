import React from 'react';
import { default as LoginPagePresentation } from './presentation';

export function LoginPage() {
  const [email, setEmail] = React.useState('');

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [password, setPassword] = React.useState('');

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  function onClickLogin(email, password) {
    console.log(email, password)
  }
  
  return React.createElement(LoginPagePresentation, { 
    onClickLogin,
    onEmailInputChange,
    onPasswordInputChange,
  })
}