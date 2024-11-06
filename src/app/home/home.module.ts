import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { MasDescargadosComponent } from './mas-descargados/mas-descargados.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, MasDescargadosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    RouterModule
  ]
})
export class HomeModule { }
