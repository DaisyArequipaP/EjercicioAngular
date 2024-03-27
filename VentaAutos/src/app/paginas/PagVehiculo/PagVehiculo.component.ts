
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
   
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService


  ) {
    this.formulario = this.formBuilder.group({
      "codigo": ['',[Validators.required, validadorCodigo()]],
      "marca": ['',[Validators.required]],
      "modelo": ['',[Validators.required]],
      "anio": ['',[Validators.required]],
      "color": ['',[Validators.required]],
      "kilometraje": ['',[Validators.required]],
      "precio": [],
      "calificacion": ['',[Validators.required]]
    });

   }

  ngOnInit() {
  }

  guardar(){
    if (this.formulario.valid){
      this.vehiculoService.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta => {
          if(respuesta.codigo == '1'){
            Swal.fire({
              title:"Mensaje",
              text:"Vehículo registrado con éxito",
              icon: "success"
            });
          }else{
            Swal.fire({
              title:"Mensaje",
              text:"No se pudo registrar el vehpiculo: "+respuesta.mensaje,
              icon: "error"
            });
          }
        }
      );
    }else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan llenar campos",
        icon: "error"
      });
    }
  }
  

 


}




export function validarCodigoComparativo(){
  return (formulario: FormGroup):ValidationErrors|null =>{
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if(valor == valor2){
      return null;
    }
    return{'codigocomparativo:':true}
  }
}
