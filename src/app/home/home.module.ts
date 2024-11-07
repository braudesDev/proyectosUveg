import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { MasDescargadosComponent } from './mas-descargados/mas-descargados.component';
import { RouterModule } from '@angular/router';
import { AgregarVideojuegoComponent } from './agregar-videojuego/agregar-videojuego.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, MasDescargadosComponent, AgregarVideojuegoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule { }
