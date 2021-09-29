import { UpdateStudentPresentational } from './presentation'
import React from 'react';
import { LocalStorageAdapter } from '../../../infra'

// enums
import { AccessLevelEnum, ShiftTypeEnum } from '../../../common/domain';

export function UpdateStudent(student) {
  const storage = new LocalStorageAdapter()

  const studentsList = storage.getItem();

  const [shift, setShift] = React.useState('');

  function onShiftInputChange(event) {
    setShift(event?.target?.value);
  }
  
  const [name, setName] = React.useState('');

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [studentClass, setStudentClass] = React.useState('');

  function onClassInputChange(event) {
    setStudentClass(event?.target?.value);
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
      enrollment: student.enrollment,
      studentClass,
      shift: shift === 1 ? ShiftTypeEnum.MORNING : ShiftTypeEnum.AFTERNOON,
      name,
      phoneNumber: phone,
      email,
      login,
      password,
      responsibleCpf: student.responsibleCpf,
      balance: student.balance,
      accessLevel: AccessLevelEnum.STUDENT
    }
    
    const updatedIndex = studentsList.findIndex(item => item.enrollment === student.enrollment)

    const newList = studentsList[updatedIndex] = updatedResponsible;

    // storage.setItem(STUDENTS_LIST, [...newList])
  }

  return React.createElement(UpdateStudentPresentational, {
    student,
    shift,
    name,
    studentClass,
    phone,
    email,
    login,
    password,

    onShiftInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit
  })
}