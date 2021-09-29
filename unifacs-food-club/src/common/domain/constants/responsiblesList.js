import { AccessLevelEnum } from '../enums';

export const responsiblesList = [
  {
    cpf: 66588207085,
    name: 'Pedro da Silva',
    phoneNumber: 75992775555,
    email: 'responsavel@gmail.com',
    login: 'banana144171001',
    password: '123123',
    studentsEnrollment: [144171001],
    accessLevel: AccessLevelEnum.RESPONSIBLE
  },
  {
    cpf: 72771775840,
    name: 'Antonio Sales',
    phoneNumber: 79982517774,
    email: 'antoniosales@gmail.com',
    login: 'antonio471268008',
    password: '123123',
    studentsEnrollment: [202973268, 198664138],
    accessLevel: AccessLevelEnum.RESPONSIBLE
  },
]