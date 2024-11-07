import { Component } from '@angular/core';
import { VideojuegosService } from 'src/app/services/videojuegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-videojuego',
  templateUrl: './agregar-videojuego.component.html',
  styleUrls: ['./agregar-videojuego.component.scss']
})
export class AgregarVideojuegoComponent {
  nuevoVideojuego = {
    nombre: '',
    descripcion: '',
    fechaLanzamiento: '',
    rating: 0,
    downloads: 0
  };

  constructor(
    private videojuegosService: VideojuegosService,
    private router: Router
  ) {}

  onSubmit() {
    this.videojuegosService.agregarVideojuego(this.nuevoVideojuego).subscribe({
      next: () => {
        alert('Videojuego agregado con éxito');
        this.router.navigate(['/module-home/home']); // Redirige al listado o página principal
      },
      error: (err) => console.error('Error al agregar el videojuego:', err)
    });
  }
}
