import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Asegúrate de importar 'of' desde 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  private videojuegos: {
    id: number,
    nombre: string,
    descripcion: string,
    fechaLanzamiento: string
  }[] = [];

  constructor() {
    const storedVideojuegos = localStorage.getItem('videojuegos');
    if (storedVideojuegos) {
      this.videojuegos = JSON.parse(storedVideojuegos);
    }
  }

  // Este método debe devolver un Observable
  agregarVideojuego(videojuego: any): Observable<any> {
    const nuevoVideojuego = {
      ...videojuego,
      id: this.videojuegos.length ? this.videojuegos[this.videojuegos.length - 1].id + 1 : 1
    };

    this.videojuegos.push(nuevoVideojuego);
    localStorage.setItem('videojuegos', JSON.stringify(this.videojuegos));

    // Retorna un Observable usando 'of()'
    return of({ message: 'Videojuego agregado con éxito', videojuego: nuevoVideojuego });
  }

  obtenerVideojuegos(): any[] {
    return this.videojuegos;
  }

  eliminarVideojuego(id: number): void {
    this.videojuegos = this.videojuegos.filter(videojuego => videojuego.id !== id);
    localStorage.setItem('videojuegos', JSON.stringify(this.videojuegos));
  }
}
