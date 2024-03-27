import { NgModule } from "@angular/core"
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";

import { RouterModule } from "@angular/router";
import { PagVehiculoComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { PagVehiculoRegistroComponent } from "./PagVehiculo/PagVehiculo.component";
import { ClientesComponent } from "./clientes/Clientes/Clientes.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        ClientesComponent,
        HomeComponent
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        ClientesComponent,
        HomeComponent
    ]
})

export class PaginaModule{

}