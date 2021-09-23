import { InsertStudentPresentational } from './presentation'
import React from 'react';
import { LocalStorageAdapter } from '../../../infra'
import { STUDENTS_LIST } from '../../../constants/domain/storageKeys';
import { ShiftType } from '../../../enums';

export function InsertStudent() {
  const storage = new LocalStorageAdapter()

  const studentsList = storage.getItem(STUDENTS_LIST);

  const [shift, setShift] = React.useState('');

  function onShiftInputChange(event) {
    setShift(event?.target?.value);
  }
  
  const [enrollment, setEnrollment] = React.useState('');

  function onEnrollmentInputChange(event) {
    setEnrollment(event?.target?.value);
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

  function enrollmentAlreadyExists() {
    const enrollmentAlreadyExists = studentsList.some(student => {
      return student.enrollment === parseFloat(enrollment)
    })

    if (enrollmentAlreadyExists) {
      alert('Já existe um aluno com esta matricula.')
      return enrollmentAlreadyExists
    }

    return enrollmentAlreadyExists
  }


  function onSubmit() {
    const error = enrollmentAlreadyExists();
    
    if (!error) {

      const newList = [...studentsList, {
        shift: shift === 1 ? ShiftType.MORNING : ShiftType.AFTERNOON,
        enrollment,
        name,
        studentClass,
        phone,
        email,
        login,
        password,
        //responsibleCpf
      }]

      // storage.setItem(PRODUCTS_LIST, [...newList])
      return;
    }
  }

  return React.createElement(InsertStudentPresentational, {
    onShiftInputChange,
    onEnrollmentInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit
  })
}