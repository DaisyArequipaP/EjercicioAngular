import { Component, OnInit, Input } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {


  mostrarImagen = true;
  
  
  /*filtro:string ="";*/
  private _filtro: string = ""; 

  get filtro(): string{
    return this._filtro;
  }

  set filtro ( filtro: string){
    this._filtro = filtro ;
   
  }

  ngOnInit() {
    console.log('Ingreso a ejecutarse')
    this.consultarVehiculos();
    
  }


  @Input() valor:string =" ";
  listaVehiculos: Array<any> = [];

  
  constructor(
    private vehiculoService: VehiculoService

  ) { 

    
  }

  

  mostrar (){
    this.mostrarImagen = !this.mostrarImagen
  }

  /*consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro).subscribe(data => {
      this.listaVehiculos = data;
    });
  }*/


  recepcion(dato: number){
    console.log("Dato:", dato);
  }


  consultarVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(respuesta =>{
      console.log(respuesta);
      this.listaVehiculos = respuesta;
    });
  }



  eliminar (codigo:string){
    Swal.fire({
      title: "Estas seguro que deseas eliminar este registro",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      icon: "question"
    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data =>{
          if(data.codigo == '1' ){
            this.consultarVehiculos();
            Swal.fire({
              title: "Mensaje",
              text: "Vehículo eliminado con éxito",
              icon: "success"
            });
          }
        });
      }
    });
  }
  


}
