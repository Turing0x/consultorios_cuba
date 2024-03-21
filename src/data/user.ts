export class UserRegister {
  reg_med?: string;
  nombre?: string;
  direccion?: string;
  num_telefono?: string;
  anno_grad?: string;
  especialista?: string;
  su_consultorio?: string;
  anno_exp?: string;
  categoria?: string;
  occupation?: string;
  username?: string;
  password?: string;

  constructor(user?: Partial<UserRegister>) {
    Object.assign(this, user);
  }
}