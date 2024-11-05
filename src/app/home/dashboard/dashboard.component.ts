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
        title: 'Crash',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et delectus? Quos rem minus, numquam architecto esse, quia, impedit velit facilis eaque voluptatibus nobis nostrum asperiores! Quisquam laborum dolorem a!',
        image: '../../../assets/images/games/crash.webp'
      },
      {
        title: 'Super Mario 64 ',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora. Repellendus deserunt adipisci ea suscipit iure temporibus distinctio perspiciatis harum possimus saepe. Harum est sapiente ratione quis impedit, cum delectus?',
        image: '../../../assets/images/games/mario64.webp'
      },
      {
        title: 'Destiny',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum repellat vitae iusto laudantium magni? Qui dignissimos totam, praesentium consequatur repellat adipisci aspernatur veritatis, animi fugiat, amet alias neque aperiam.',
        image: '../../../assets/images/games/destiny.jpg'
      },
      {
        title: 'Gears Of War',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
        image: '../../../assets/images/games/gearsOfWar.jpg'
      },
      {
        title: 'God Of War',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
        image: '../../../assets/images/games/godOfWar.jpg'
      },
      {
        title: 'GTA V',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
        image: '../../../assets/images/games/gtaV.jpg'
      },
      {
        title: 'GTA Vice City',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cum, nulla inventore tempora ipsam ducimus! Porro facere a accusamus sit, ducimus, nam doloribus quis mollitia ipsam fugit fugiat, necessitatibus dolor.',
        image: '../../../assets/images/games/gtaViceCity.jpg'
      },
      {
        title: 'Mario Odissey',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
        image: '../../../assets/images/games/marioOdissey.jpg'
      },
      {
        title: 'Resident Evil',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odit voluptatibus totam, facere sequi numquam alias vitae hic eveniet quaerat unde, sed asperiores fugit maiores a assumenda dicta repellat temporibus?',
        image: '../../../assets/images/games/residentEvil.jpg'
      },
      {
        title: 'Zelda',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquid, modi id ullam magnam repellendus porro officiis perferendis magni asperiores aspernatur vitae culpa, maiores, pariatur odit assumenda! Est, temporibus accusamus!',
        image: '../../../assets/images/games/zelda.webp'
      },
      {
        title: 'Super Mario 3',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odit voluptatibus totam, facere sequi numquam alias vitae hic eveniet quaerat unde, sed asperiores fugit maiores a assumenda dicta repellat temporibus?',
        image: '../../../assets/images/games/superMario3.jpg'
      },
      {
        title: 'The Last Of Us',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nam provident tenetur. Debitis laboriosam saepe animi veritatis, sit corrupti aspernatur ducimus ullam quae repellendus voluptatibus minus facere omnis et.',
        image: '../../../assets/images/games/theLastOfUs.jpg'
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
