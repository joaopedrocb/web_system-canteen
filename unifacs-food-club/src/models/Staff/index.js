import { AccessLevelEnum } from '../../common/domain'

export class Staff {
  constructor() {
    this.name = 'Unifacs';
    this.adress = 'Av. Juracy Magalhães Júnior, S/N - Rio Vermelho, Salvador - BA, 41940-060';
    this.phoneNumber = '(71) 3021-2800';
    this.email = 'funcionario@gmail.com';
    this.accessLevel = AccessLevelEnum.STAFF
  }

  insertProduct(product) {}

  updateProduct(productCode, updatedProduct) {}

  getProduct(productCode) {}

  blockProduct(productCode) {}

  unblockProduct(productCode) {}

  insertResponsible(responsible) {}

  updateResponsible(cpf, updatedResponsible) {}

  deleteResponsible(cpf) {}

  getResponsible(cpf) {}

  insertStudent(student) {}

  updateStudent(studentEnrollment, updatedStudent) {}

  deleteStudent(studentEnrollment) {}

  getStudent(studentEnrollment) {}
  
}