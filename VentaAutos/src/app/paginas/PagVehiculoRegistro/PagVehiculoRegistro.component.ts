import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo?:Vehiculo;
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder
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
    this.formulario.controls['codigo'].disable();
  }


  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.vehiculoService.getVehiculo(params['codigo']).subscribe( data =>{
        if(data.codigo == '1'){
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['color'].setValue(this.vehiculo?.color);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
        }else{
          Swal.fire({
            title: "Mensaje de Alerta",
            text: "No se pudo cargar la informacion",
            icon: "error"
          });
        }
        
        
      });
      /*this.vehiculo = this.vehiculoService.getVehiculo(params['codigo']);*/
    });
  }

  imprimir(data:any){
    console.log('Calificacion:', data)
  }


  guardar (){
    if(this.formulario.valid){
      this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe( data => {
        if(data.codigo == '1' ){
          Swal.fire({
            title: "Mensaje",
            text: "Vehículo actualizado con éxito",
            icon: "info"
          });
        }
      });
    }else{
      Swal.fire({
        title: "Mensaje",
        text: "Faltan llenar campos",
        icon: "error"
      });
    }
  }

  /*guardar(){
    
    let vehiculo:Vehiculo = {...this.formulario.value};
    this.vehiculoService.addVehiculo(vehiculo);
    console.log('Formulario', this.formulario.value);
    Swal.fire({
      title: "Mensaje",
      text: "Se grabó con éxito",
      icon: "info"
    });
  }*/
  
}

export function validadorCodigo(): ValidatorFn {
  return (control:AbstractControl):ValidationErrors|null => {
    const codigoV = /^[A-Z]\d{4}$/;
    let value = control.value;
    if (codigoV.test(value)){
      return null;
    }
    return {'codigoValidate': true};
  }
} 
