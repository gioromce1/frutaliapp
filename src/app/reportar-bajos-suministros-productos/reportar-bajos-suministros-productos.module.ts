import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportarBajosSuministrosProductosPage } from './reportar-bajos-suministros-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarBajosSuministrosProductosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportarBajosSuministrosProductosPage]
})
export class ReportarBajosSuministrosProductosPageModule {}
