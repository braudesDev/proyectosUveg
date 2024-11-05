// login.component.ts (código existente en TypeScript)

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
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Inicio de sesión correcto');
      const isValidUser = this.authService.login(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value,
      );

      if (isValidUser) {
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['/', 'module-home', 'home', 'dashboard']);
      } else {
        console.error('El usuario no existe');
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.error('Ingrese datos en todos los campos.');
    }
  }

  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }

  onKeyPress(event: any) {
    console.log(event);
  }
}
