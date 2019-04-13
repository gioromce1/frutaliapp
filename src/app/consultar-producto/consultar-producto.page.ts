import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.page.html',
  styleUrls: ['./consultar-producto.page.scss'],
})
export class ConsultarProductoPage implements OnInit {
  

  datosProductos=[];
  datosPlanta={
    codigo:"",
    nombre:"",
    especie:"",
    genero:"",
    valorLibra:0,
    tipo:"",
    error:""

  }

  constructor(private router:Router, private barcodeScanner: BarcodeScanner) {
    this.iniciarEstructuraProductos();
   }

  ngOnInit() {
  }

iniciarEstructuraProductos(){
  this.datosProductos.push({
    codigo:"1001",
    nombre:"Sabila",
    especie:"Aloe vera",
    genero:"Aloe",
    tipo:"Libras",
    valorLibra:500,
  });
  this.datosProductos.push({
    codigo:"1002",
    nombre:"Girasol",
    especie:"Helianthus annuus",
    genero:"Helianthus",
    tipo:"Unidad",
    valorLibra:1100,
  });
  this.datosProductos.push({
    codigo:"1003",
    nombre:"rosa",
    especie:"Rosa moschata",
    genero:"Moschata",
    tipo:"Kilo",
    valorLibra:800,
  });
  this.datosProductos.push({
    codigo:"1004",
    nombre:"Cactus",
    especie:"Cactaceas",
    genero:"Cactaceas",
    tipo:"Unidad",
    valorLibra:5000,
  });
}

redireccionarVistaReportar(){
  this.router.navigate(["/reportar-bajos-suministros-productos",{codigoPlanta:this.datosPlanta.codigo, nombrePlanta:this.datosPlanta.nombre, tipo:this.datosPlanta.tipo}]);
}
redireccionarVistaReportarImperfecto(){
 this.router.navigate(["/reportar-imperfecto-producto", {codigoPlanta:this.datosPlanta.codigo, nombrePlanta:this.datosPlanta.nombre}]);
}

buscarPlantaPorCodigo(cod){
  for (let i = 0; i < this.datosProductos.length; i++) {
    if(this.datosProductos[i].codigo===cod){
      this.datosProductos[i].error="";
      return this.datosProductos[i];
    }
  }
  return {error:"no se encontro producto con este codigo"}
  
}
formData(data){
  this.datosPlanta=this.buscarPlantaPorCodigo(data.value["codigo"]);
  //console.log(this.datosPlanta);
  }

  //-----------------------------------scanner--------------------------------

  scanCode() {
    this.barcodeScanner.scan().then(async barcodeData => {
      
      //const alert = await this.alertController.create({
      //  header: 'Registrar guias',
        //message: barcodeData,
        //buttons: [
         // {
          //  text: 'No',
           // cssClass: 'secondary',
           // handler: (blah) => {
            //  this.show = true;
            //}
          //}, {
            //text: 'Si',
            //handler: () => {
             // this.quantity = this.quantity+1;
              //this.scanCode();
            //}
          //}
        //]
      //});
  
       //await alert.present();
      //this.scannedData = barcodeData;
    //}).catch(err => {
    //  console.log('Error', err);
    });
  }
}
