import React from 'react';
import { default as LoginPagePresentation } from './presentation';
import { Responsible, Staff, Student } from '../../models'
import { LocalStorageAdapter } from '../../infra'
import { LOGGED_USER } from '../../constants'

export function LoginPage() {

  const storage = new LocalStorageAdapter();
  
  const responsible = new Responsible()
  
  const student = new Student();
  
  const staff = new Staff()

  const validResponsibleEmail = responsible.email;

  const validStudentEmail = student.email;

  const validStaffEmail = staff.email;

  const [email, setEmail] = React.useState('');

  function onEmailInputChange(event) {
    setEmail(event?.target?.value);
  }

  const [password, setPassword] = React.useState('');

  function onPasswordInputChange(event) {
    setPassword(event?.target?.value);
  }

  function saveResponsible() {
    const { 
      cpf, 
      name, 
      phoneNumber,
      email,
      login, 
      password,
      studentsEnrollment,
      accessLevel,
     } = responsible;
  
    storage.setItem(LOGGED_USER, { 
      cpf, 
      name, 
      phoneNumber,
      email,
      login, 
      password,
      studentsEnrollment,
      accessLevel,
    });
  }
  
  
  function saveStudent() {
    const {
      studentEnrollment,
      studentClass,
      shift,
      name,
      phoneNumber,
      email,
      login,
      password,
      responsibleCpf,
      balance,
      accessLevel,
    } = student;
  
    storage.setItem(LOGGED_USER, {
      studentEnrollment,
      studentClass,
      shift,
      name,
      phoneNumber,
      email,
      login,
      password,
      responsibleCpf,
      balance,
      accessLevel,
    });
  }
  
  function saveStaff() {
    const {
      name,
      adress,
      phoneNumber,
      email,
      accessLevel,
    } = staff;
  
    storage.setItem(LOGGED_USER, {   
      name,
      adress,
      phoneNumber,
      email,
      accessLevel
    });
  }

function onClickLogin() {

  if (email === validResponsibleEmail && password === '12313') {
    console.log('Logado como responsável:', responsible)
    saveResponsible()
  }

  if (email === validStudentEmail && password === '12313') {
    console.log('Logado como aluno:', student)
    saveStudent()
  }
  

  if (email === validStaffEmail && password === '12313') {
    console.log('Logado como funcionário')
    saveStaff()
  }
}
  
  return React.createElement(LoginPagePresentation, { 
    onClickLogin,
    onEmailInputChange,
    onPasswordInputChange,
  })
}