export class Clinic{
  id: string = "";
  name: string = "";
  password: string = "";

  constructor(data?: { id: string; name: string; password: string }) {
    if (data) {
        this.id = data.id;
        this.name = data.name;
        this.password = data.password;
    } else {
        this.id = '';
        this.name = '';
        this.password = '';
    }
  }
}