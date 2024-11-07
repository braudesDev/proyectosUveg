import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // Inicialización del formulario con validaciones
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  // Método de inicio de sesión
  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      
      const isValidUser = this.authService.login(email, password);

      if (isValidUser) {
        // Redirige al dashboard si el login es exitoso
        this.router.navigate(['/', 'module-home', 'home', 'dashboard']);
      } else {
        // Muestra mensaje de error si el login falla
        console.error('El usuario no existe');
      }
    } else {
      // Marca todos los campos como tocados para mostrar errores
      this.loginForm.markAllAsTouched();
      console.error('Ingrese datos en todos los campos.');
    }
  }

  // Redirige a la página de registro
  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }

  // Control de teclas presionadas (para depuración)
  onKeyPress(event: any) {
    console.log(event);
  }
}
