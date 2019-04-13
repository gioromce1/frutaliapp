import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportar-bajos-suministros-productos',
  templateUrl: './reportar-bajos-suministros-productos.page.html',
  styleUrls: ['./reportar-bajos-suministros-productos.page.scss'],
})
export class ReportarBajosSuministrosProductosPage implements OnInit {
  codigo="";
  nombre="";
  tipo="";
  //listTipoProduct=[{nombre:"litros"},{nombre:"kilogramos"},{nombre:"metros"},{nombre:"metros cuadrados"},{nombre:"unidad"},{nombre:"libra"}]



  constructor(private activateRoute:ActivatedRoute) {
    //console.log(this.activateRoute.snapshot.paramMap.get("codigoPlanta")," ",this.activateRoute.snapshot.paramMap.get("nombrePlanta"));
    this.codigo=this.activateRoute.snapshot.paramMap.get("codigoPlanta");
    this.nombre=this.activateRoute.snapshot.paramMap.get("nombrePlanta");
    this.tipo=this.activateRoute.snapshot.paramMap.get("tipo");
   }

  ngOnInit() {
  }

  formData(data){
    alert("ingreso de producto "+this.nombre+" fue exitoso con datos: "+" codigo: "+this.codigo+" cantidad: "+data.value.cantidadProducto+" y tipo producto: "+this.tipo);
    console.log(data.value);
  }

}
