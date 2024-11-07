import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: {
    id: number,
    name: string,
    email: string,
    password: string,
  }[] = [{
    id: 1,
    name: 'Braulio Rodriguez',
    email: 'braudeschanel@gmail.com',
    password: '02081996'
  }];

  constructor() {}

  // Método de login
  login(email: string, password: string): boolean {
    const userFound = this.users.find((user) => user.email === email && user.password === password);
  
    if (userFound) {
      // Guarda el objeto completo del usuario en localStorage
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      console.log('Usuario autenticado correctamente:', userFound);
      return true;
    } else {
      // Limpia el localStorage si no hay usuario válido
      localStorage.removeItem('isLogged');
      console.log('Credenciales incorrectas');
      return false;
    }
  }
  
  

  // Método de logout
  logout() {
    localStorage.removeItem('isLogged');
    console.log('Sesión cerrada');
  }

  // Método para registrar un nuevo usuario
  signIn(name: string, email: string, password: string) {
    const lastUser = this.users[this.users.length - 1];
    const newUser = { name, email, password, id: lastUser.id + 1 };
    this.users.push(newUser);
    localStorage.setItem('isLogged', JSON.stringify(newUser));
    console.log('Nuevo usuario registrado y autenticado');
  }
}
