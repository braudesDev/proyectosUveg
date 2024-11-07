import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-videojuego',
  templateUrl: './agregar-videojuego.component.html',
  styleUrls: ['./agregar-videojuego.component.scss']
})
export class AgregarVideojuegoComponent {
  // Modelo del videojuego
  nuevoVideojuego = {
    titulo: '',
    clasificacion: '',
    descripcion: '',
    fechaLanzamiento: '',
    numDescargas: 0
  };

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Nuevo Videojuego:', this.nuevoVideojuego);

    // Aquí puedes agregar la lógica para guardar el videojuego o enviarlo a un servidor
    // Por ejemplo, enviar el videojuego a través de un servicio
  }
}
