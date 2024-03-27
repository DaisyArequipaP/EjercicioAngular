import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';

import { PagVehiculoComponent} from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { ClientesComponent } from './paginas/clientes/Clientes/Clientes.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaVehiculosComponent
  },
  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent
  },
  {
    path: "clientes",
    component: ClientesComponent,
    
  },
  {
    path: "vehiculo/:codigo",
    component: PagVehiculoComponent
  },
  {
    path: " ",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagNotFoundComponent,
    pathMatch: "full"
  }
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
