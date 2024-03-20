export class Doctor {
  reg_med: string = '';
  nombre: string = '';
  direccion: string = '';
  num_telefono: string = '';
  anno_grad: string = '';
  su_consultorio: string = '';

  constructor(data? : { reg_med: string, nombre: string, direccion: string, num_telefono: string, anno_grad: string, su_consultorio: string }){
    if (data) {
      this.reg_med = data.reg_med;
      this.nombre = data.nombre;
      this.direccion = data.direccion;
      this.num_telefono = data.num_telefono;
      this.anno_grad = data.anno_grad;
      this.su_consultorio = data.su_consultorio;
    }
    else {
      this.reg_med = '';
      this.nombre = '';
      this.direccion = '';
      this.num_telefono = '';
      this.anno_grad = '';
      this.su_consultorio = '';
    }
      
  }
}