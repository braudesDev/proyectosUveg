import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/interfaces/game/game.interface';

@Component({
  selector: 'app-mas-descargados',
  templateUrl: './mas-descargados.component.html',
  styleUrls: ['./mas-descargados.component.scss']
})
export class MasDescargadosComponent implements OnInit {
  masDescargados: IGame[];

  constructor() { }

  ngOnInit(): void {
    this.masDescargados = [
      {
        title: 'Crash Bandicot',
        description: 'Un marsupial llamado Crash debe viajar a través de niveles desafiantes para derrotar al malvado Dr. Neo Cortex.',
        image: 'assets/images/games/crash.webp',
        releaseDate: '1996-09-10', // Fecha de lanzamiento
        rating: 4.5, // Calificación
      },
      {
        title: 'Super Mario 64',
        description: 'Mario explora un castillo en 3D para rescatar a la Princesa Peach, recolectando estrellas para desbloquear nuevas áreas.',
        image: 'assets/images/games/mario64.webp',
        releaseDate: '1996-06-23',
        rating: 4.8,
      },
      {
        title: 'Destiny',
        description: 'Un juego de disparos en línea donde los jugadores controlan a los Guardianes, luchando por proteger la última ciudad humana.',
        image: 'assets/images/games/destiny.jpg',
        releaseDate: '2014-09-09',
        rating: 4.0,
      },
      {
        title: 'Gears Of War',
        description: 'En un mundo devastado, los jugadores luchan contra alienígenas llamados "Locust" usando tácticas de cobertura.',
        image: 'assets/images/games/gearsOfWar.jpg',
        releaseDate: '2006-11-12',
        rating: 4.5,
      },
      {
        title: 'God Of War',
        description: 'Kratos, un antiguo dios griego, se enfrenta a monstruos y dioses mitológicos en emocionantes batallas.',
        image: 'assets/images/games/godOfWar.jpg',
        releaseDate: '2005-03-22',
        rating: 4.7,
      },
      // Continúa agregando los demás juegos con sus propiedades correspondientes...
    ];
  }

  onBuyEvent(event: IGame) {
    console.log('Comprar: ', event);
  }

  onNotInterestedEvent(event: string) {
    console.log('No estoy interesad@: ', event);
  }
}
