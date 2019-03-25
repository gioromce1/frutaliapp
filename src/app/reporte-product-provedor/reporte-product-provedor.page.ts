import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-product-provedor',
  templateUrl: './reporte-product-provedor.page.html',
  styleUrls: ['./reporte-product-provedor.page.scss'],
})
export class ReporteProductProvedorPage implements OnInit {
  datosProductos=[]
  datosPlanta={
    codigo:"",
    nombre:"",
    especie:"",
    genero:"",
    valorLibra:0,
    error:""

  }

  constructor() {
    this.iniciarEstructuraProductos();
   }

  ngOnInit() {
  }

iniciarEstructuraProductos(){
  this.datosProductos.push({
    codigo:"1001",
    nombre:"sabila",
    especie:"aloe vera",
    genero:"aloe",
    valorLibra:500,
  });
  this.datosProductos.push({
    codigo:"1002",
    nombre:"girasol",
    especie:"Helianthus annuus",
    genero:"Helianthus",
    valorLibra:1100,
  });
  this.datosProductos.push({
    codigo:"1003",
    nombre:"rosa",
    especie:"Rosa moschata",
    genero:"moschata",
    valorLibra:800,
  });
  this.datosProductos.push({
    codigo:"1004",
    nombre:"cactus",
    especie:"cactaceas",
    genero:"cactaceas",
    valorLibra:5000,
  });
}

buscarPlantaPorCodigo(cod){
  for (let i = 0; i < this.datosProductos.length; i++) {
    if(this.datosProductos[i].codigo===cod){
      this.datosProductos[i].error="exito";
      return this.datosProductos[i];
    }
  }
  return {error:"no se encontro producto con este codigo"}
  
}
formData(data){
  this.datosPlanta=this.buscarPlantaPorCodigo(data.value["codigo"]);
  console.log(this.datosPlanta);
  }

}
