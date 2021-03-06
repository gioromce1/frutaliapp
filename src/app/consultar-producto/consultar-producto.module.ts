import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


import { IonicModule } from '@ionic/angular';

import { ConsultarProductoPage } from './consultar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarProductoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  
  ],
  providers:[BarcodeScanner],
  declarations: [ConsultarProductoPage]
})
export class ConsultarProductoPageModule {}
