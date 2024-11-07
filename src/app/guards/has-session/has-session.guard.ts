import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasSessionGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = localStorage.getItem('isLogged');
    console.log('isLogged:', isLogged);

    // Verificamos si hay datos en localStorage
    if (isLogged) {
      try {
        const user = JSON.parse(isLogged); // Intentamos parsear el valor de localStorage
        if (user && user.email) {
          console.log('Usuario autenticado:', user);
          return true; // El usuario está autenticado correctamente
        } else {
          console.log('Error en el objeto de usuario. Redirigiendo al login.');
          this.router.navigate(['/', 'module-auth', 'login']);
          return false; // El objeto no tiene el formato esperado
        }
      } catch (e) {
        console.error('Error al parsear isLogged:', e);
        // Si ocurre un error al parsear, redirigimos al login
        this.router.navigate(['/', 'module-auth', 'login']);
        return false;
      }
    } else {
      console.log('No hay sesión activa. Redirigiendo al login.');
      this.router.navigate(['/', 'module-auth', 'login']);
      return false; // Si no hay sesión, redirige al login
    }
  }
}
