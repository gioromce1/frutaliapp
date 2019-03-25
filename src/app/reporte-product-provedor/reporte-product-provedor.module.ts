import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReporteProductProvedorPage } from './reporte-product-provedor.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteProductProvedorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReporteProductProvedorPage]
})
export class ReporteProductProvedorPageModule {}
