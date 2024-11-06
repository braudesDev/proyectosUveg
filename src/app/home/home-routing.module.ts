import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MasDescargadosComponent } from './mas-descargados/mas-descargados.component';
import { HasSessionGuard } from '../guards/has-session/has-session.guard';

const routesChildren: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [HasSessionGuard]},
  {path: 'mas-descargados', component: MasDescargadosComponent, canActivate: [HasSessionGuard]},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: routesChildren, canActivate: [HasSessionGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
