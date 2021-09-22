import { AccessLevel } from '../../enums'

export class Responsible {
  constructor() {
    this.cpf = 18030953611;
    this.name = 'Pedro da Silva';
    this.phoneNumber = 758836675555;
    this.email = 'responsavel@gmail.com';
    this.login = 'pedro.silva18030953611';
    this.password = '123123'; 
    this.studentsEnrollment = [144171001];
    this.accessLevel = AccessLevel.RESPONSIBLE
  } 

  // PRIVATE
  async deposit(value, studentEnrollment) {}

  // PRIVATE
  async getPurchaseHistoric(studentEnrollment, initialDate, finalDate) {}
}