import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*import { Vehiculo } from '../utilitarios/modelos/Vehiculo';*/
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor(private http: HttpClient) { }
baseUrl = "https://epico.gob.ec/vehiculo/public/api/";
httpOptions = { 
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
/*lo que consulta todos los vehiculos=> GET "vehiculos/"
El que inserta=> POST "vehiculo/"
El que ACTUALIZO=> PUT "vehiculo/"
El que ELIMINA=> DELETE "vehiculo/:codigo"
El que consulta un vechiuslo: GET "vehiculo/:codigo"

/*getVehiculos():Vehiculo[]  {
  return this.listaVehiculos;
}*/
getVehiculos():Observable<Vehiculo[]>{
  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/").pipe(
    map(respuesta => {
      return respuesta.data;
    })
  );
}

insertVehiculo(vehiculo: Vehiculo){
  
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
}

getVehiculo(codigo:string){
  return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

actualizarVehiculo(vehiculo: Vehiculo, codigo: string){
  
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo, this.httpOptions);
}

eliminarVehiculo(codigo:string){
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}



/*getVehiculos(filtro:any):Observable<Array<Vehiculo>>{
  const escucha: Observable<Array<Vehiculo>> = new Observable(escuchando => {
    let lista = this.listaVehiculos.filter(elem => elem.marca.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()) )
    escuchando.next(lista);
  });
  return escucha;
}*/

/*getVehiculo(codigo:string): Observable<Vehiculo|undefined> {
  const escucha: Observable<Vehiculo|undefined> = new Observable(escuchando => {
    setTimeout(() => {
      let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo);
    escuchando.next(vehiculo);
    }, 1000);
  }); 
  return escucha;
}*/


addVehiculo (vehiculo: Vehiculo){
  this.listaVehiculos.push(vehiculo);
}




private listaVehiculos: Array<Vehiculo> = [
  {"codigo": "A001", "marca": "Toyota", "modelo": "Corolla", "anio": 2020, "color": "Blanco", "kilometraje": "15,000 km", "precio": 18000, "calificacion": 3, "foto":"https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg"},
  {"codigo": "A002", "marca": "Honda", "modelo": "Civic", "anio": 2018, "color": "Negro", "kilometraje": "22,000 km", "precio": 16000, "calificacion": 2, "foto":"https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg"},
  {"codigo": "A003", "marca": "Ford", "modelo": "Mustang", "anio": 2021, "color": "Rojo", "kilometraje": "10,000 km", "precio": 28000, "calificacion": 1, "foto":"https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg"},
  {"codigo": "A004", "marca": "Chevrolet", "modelo": "Camaro", "anio": 2019, "color": "Amarillo", "kilometraje": "18,000 km", "precio": 25000, "calificacion": 5, "foto":"https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg"},
  {"codigo": "A005", "marca": "Tesla", "modelo": "Model 3", "anio": 2022, "color": "Azul", "kilometraje": "8,000 km", "precio": 35000, "calificacion": 4, "foto":"https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg"},
];

}

export interface Vehiculo{
  codigo: string;
  marca: string;
  color?: string;
  modelo: string;
  kilometraje?: string;
  precio?: number;
  foto?: string | null;
  anio?: number;
  calificacion?: number | undefined;
}

export interface Respuesta{
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo>|Vehiculo|any;
}