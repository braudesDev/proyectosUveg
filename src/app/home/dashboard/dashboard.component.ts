import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/interfaces/game/game.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lastGames: IGame[];

  constructor() { }

  ngOnInit(): void {
    this.lastGames = [
      {
        title: 'Crash Bandicot',
        description: 'Un marsupial llamado Crash debe viajar a través de niveles desafiantes para derrotar al malvado Dr. Neo Cortex.',
        image: 'assets/images/games/crash.webp',
        releaseDate: '1996-08-31',
        rating: 8.5
      },
      {
        title: 'Super Mario 64',
        description: 'Mario explora un castillo en 3D para rescatar a la Princesa Peach, recolectando estrellas para desbloquear nuevas áreas.',
        image: 'assets/images/games/mario64.webp',
        releaseDate: '1996-06-23',
        rating: 9.5
      },
      {
        title: 'Destiny',
        description: 'Un juego de disparos en línea donde los jugadores controlan a los Guardianes, luchando por proteger la última ciudad humana.',
        image: 'assets/images/games/destiny.jpg',
        releaseDate: '2014-09-09',
        rating: 8.0
      },
      {
        title: 'Gears Of War',
        description: 'En un mundo devastado, los jugadores luchan contra alienígenas llamados "Locust" usando tácticas de cobertura.',
        image: 'assets/images/games/gearsOfWar.jpg',
        releaseDate: '2006-11-12',
        rating: 9.0
      },
      {
        title: 'God Of War',
        description: 'Kratos, un antiguo dios griego, se enfrenta a monstruos y dioses mitológicos en emocionantes batallas.',
        image: 'assets/images/games/godOfWar.jpg',
        releaseDate: '2005-03-22',
        rating: 9.8
      },
      {
        title: 'GTA V',
        description: 'Tres criminales participan en robos y misiones en la ciudad ficticia de Los Santos, con un mundo abierto y mucha libertad.',
        image: 'assets/images/games/gtaV.jpg',
        releaseDate: '2013-09-17',
        rating: 9.7
      },
      {
        title: 'GTA Vice City',
        description: 'Tommy Vercetti, un criminal en los años 80, lucha por tomar el control de Vice City en este clásico de acción.',
        image: 'assets/images/games/gtaViceCity.jpg',
        releaseDate: '2002-10-29',
        rating: 9.0
      },
      {
        title: 'Mario Odissey',
        description: 'Mario viaja por diferentes mundos con su nuevo sombrero "Cappy", rescatando a la Princesa Peach y explorando en 3D.',
        image: 'assets/images/games/marioOdissey.jpg',
        releaseDate: '2017-10-27',
        rating: 9.4
      },
      {
        title: 'Resident Evil',
        description: 'Un equipo de rescate investiga una mansión llena de zombis y criaturas mientras descubre secretos aterradores.',
        image: 'assets/images/games/residentEvil.jpg',
        releaseDate: '1996-03-22',
        rating: 9.1
      },
      {
        title: 'Zelda',
        description: 'Link debe detener al villano Ganondorf y salvar el reino de Hyrule en este aclamado juego de aventuras.',
        image: 'assets/images/games/zelda.webp',
        releaseDate: '1986-02-21',
        rating: 9.6
      },
      {
        title: 'Super Mario 3',
        description: 'Mario y Luigi viajan por mundos con poderes especiales para rescatar a la Princesa Toadstool de Bowser.',
        image: 'assets/images/games/superMario3.jpg',
        releaseDate: '1988-04-15',
        rating: 9.3
      },
      {
        title: 'The Last Of Us',
        description: 'Joel y Ellie atraviesan un mundo post-apocalíptico en busca de un remedio mientras luchan por sobrevivir.',
        image: 'assets/images/games/theLastOfUs.jpg',
        releaseDate: '2013-06-14',
        rating: 10.0
      },
    ];
  }

  onBuyEvent(event: IGame) {
    console.log('Comprar: ', event);
  }

  onNotInterestedEvent(event: string) {
    console.log('No estoy interesad@: ', event);
  }
}
