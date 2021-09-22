import React from 'react';
import { default as LoginPagePresentation } from './presentation';

export function LoginPage() {
  function onClickLogin(email, password) {
    console.log(email, password)
  }
  
  return React.createElement(LoginPagePresentation, { 
    onClickLogin,
  })
}