import { ShiftTypeEnum, AccessLevelEnum } from '../enums'

export const studentsList = [
  {
    enrollment: 144171001,
    studentClass: 101,
    shift: ShiftTypeEnum.AFTERNOON,
    name: 'João da Silva',
    phoneNumber: 75992775555,
    email: 'aluno@gmail.com',
    login: 'bananinha144171001',
    password: '123123',
    responsibleCpf: 66588207085,
    balance: 312,
    accessLevel: AccessLevelEnum.STUDENT
  },
  {
    enrollment: 202973268,
    studentClass: 102,
    shift: ShiftTypeEnum.MORNING,
    name: 'Fernando Carlos Eduardo Sales',
    phoneNumber: 79982517774,
    email: 'fernandosales@gmail.com',
    login: 'fernando471268008',
    password: '123123',
    responsibleCpf: 72771775840,
    balance: 241,
    accessLevel: AccessLevelEnum.STUDENT
  },
  {
    enrollment: 198664138,
    studentClass: 102,
    shift: ShiftTypeEnum.MORNING,
    name: 'Márcio Levi Tiago Sales',
    phoneNumber: 7925660814,
    email: 'marciosales@gmail.com',
    login: 'marcio198664138',
    password: '123123',
    responsibleCpf: 72771775840,
    balance: 325,
    accessLevel: AccessLevelEnum.STUDENT
  },
]