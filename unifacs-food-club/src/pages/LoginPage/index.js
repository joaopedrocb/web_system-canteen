// dependencies
import React from 'react';
import { useHistory } from 'react-router-dom'

// presentation
import { default as LoginPagePresentation } from './presentation';

// models
import { Responsible, Staff, Student } from '../../models'

// infra
import { LocalStorageAdapter } from '../../infra'

// constants
import { LOGGED_USER } from '../../constants'

export function LoginPage() {

  const history = useHistory();

  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []); 
  
  React.useLayoutEffect(() => {
    const loggedUser = storage.getItem(LOGGED_USER);

    if (loggedUser) {
      history.push('./');

      return;
    }
  }, [history, storage]);

  const responsible = new Responsible();
  
  const student = new Student();
  
  const staff = new Staff();

  const validResponsibleEmail = responsible.email;

  const validStudentEmail = student.email;

  const validStaffEmail = staff.email;

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

    console.log(staff)
  
    localStorage.setItem(LOGGED_USER, {   
      name,
      adress,
      phoneNumber,
      email,
      accessLevel
    });
  }

function onClickLogin() {
  if (email === validResponsibleEmail && password === '12313') {
    saveResponsible();
    history.push('./');
  }

  if (email === validStudentEmail && password === '12313') {
    saveStudent();
    history.push('./');
  }
  

  if (email === validStaffEmail && password === '12313') {
    saveStaff();
    history.push('./');
  }
}

const [email, setEmail] = React.useState('');

function onEmailInputChange(event) {
  setEmail(event?.target?.value);
}

const [password, setPassword] = React.useState('');

function onPasswordInputChange(event) {
  setPassword(event?.target?.value);
}
  
  return React.createElement(LoginPagePresentation, { 
    email,
    password,

    onClickLogin,
    onEmailInputChange,
    onPasswordInputChange,
  })
}