export class UserRegister {
  regMed?: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
  annoGrad?: string;
  esEspecialista?: string;
  suConsultorio?: string;
  occupation?: string;
  anno_exp?: string;
  category?: string;
  username?: string;
  password?: string;

  constructor(user?: Partial<UserRegister>) {
    Object.assign(this, user);
  }
}