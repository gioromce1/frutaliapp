import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportar-bajos-suministros-productos',
  templateUrl: './reportar-bajos-suministros-productos.page.html',
  styleUrls: ['./reportar-bajos-suministros-productos.page.scss'],
})
export class ReportarBajosSuministrosProductosPage implements OnInit {
listaProductos=[{codigo:1001,nombre:"sabila"},{codigo:1002,nombre:"girasol"},{codigo:1003,nombre:"cactus"}]
listTipoProduct=[{nombre:"litros"},{nombre:"kilogramos"},{nombre:"metros"},{nombre:"metros cuadrados"},{nombre:"unidad"},{nombre:"libra"}]

  constructor() { }

  ngOnInit() {
  }

  formData(data){
    alert("ingreso de producto "+data.value["nombreProducto"]+" exitoso");
    console.log(data.value);
  }

}
