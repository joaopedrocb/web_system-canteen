import { ShiftType } from '../../enums'
import { AccessLevel } from '../../enums'

export class Student {
  constructor() {
    this.studentEnrollment = 144171001;
    this.studentClass = 101;
    this.shift = ShiftType.MORNING;
    this.name = 'João da Silva';
    this.phoneNumber = 75992775555;
    this.email = 'aluno@gmail.com';
    this.login = 'bananinha144171001';
    this.password = '123123';
    this.responsibleCpf = 18030953611;
    this.balance = 100;
    this.accessLevel = AccessLevel.STUDENT
  } 

  // PRIVATE
  async buy(products) {}
  
  // PRIVATE
  async listProducts() {}

  // PUBLIC
  getBalance() {
    return this.balance;
  };

  // PUBLIC
  async getDepositsStatement() {}
}