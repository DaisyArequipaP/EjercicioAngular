import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina="RegistrodeClientes";
  cliente = { nombre: "", password: "", telefono: "", email: "" };
  quiereContacto: boolean = false;
 

  constructor(private _router: Router,) { }

  ngOnInit() {
  }

  goHome(){
    this._router.navigate(['/home']);
  }
    
  registroCliente(){
    alert ("En construcción");
    this._router.navigate(['/vehiculo']);
  }

  registra() {
    // Implementa la lógica para registrar el cliente
    console.log('Registrando cliente:', this.cliente);
    if (this.quiereContacto) {
      Swal.fire({
        title: "Mensaje",
        text: "Registro y datos ingresados con éxito",
        icon: "success"
      });
    }else{
      Swal.fire({
        title: "Mensaje",
        text: "Registro ingresado con éxito",
        icon: "success"
      });
    }
  }
  
  Job() {
    
    
    
    }

}
