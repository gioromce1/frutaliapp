import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportar-imperfecto-producto',
  templateUrl: './reportar-imperfecto-producto.page.html',
  styleUrls: ['./reportar-imperfecto-producto.page.scss'],
})
export class ReportarImperfectoProductoPage implements OnInit {
codigo="";
nombre="";

  constructor(private activateRoute:ActivatedRoute) { 
    this.codigo=this.activateRoute.snapshot.paramMap.get("codigoPlanta");
    this.nombre=this.activateRoute.snapshot.paramMap.get("nombrePlanta");
  }

  ngOnInit() {
  }

  formData(data){
    console.log(data," ",this.codigo," ",this.nombre);
    alert(data.value.descripcion);
  }
}
