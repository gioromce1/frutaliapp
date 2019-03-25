import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'codigoqr', loadChildren: './codigoqr/codigoqr.module#CodigoqrPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'reporte-product-provedor', loadChildren: './reporte-product-provedor/reporte-product-provedor.module#ReporteProductProvedorPageModule' },
  { path: 'reportar-bajos-suministros-productos', loadChildren: './reportar-bajos-suministros-productos/reportar-bajos-suministros-productos.module#ReportarBajosSuministrosProductosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
