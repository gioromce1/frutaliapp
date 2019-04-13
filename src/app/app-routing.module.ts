import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'codigoqr', loadChildren: './codigoqr/codigoqr.module#CodigoqrPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'reportar-bajos-suministros-productos', loadChildren: './reportar-bajos-suministros-productos/reportar-bajos-suministros-productos.module#ReportarBajosSuministrosProductosPageModule' },
  { path: 'consultar-producto', loadChildren: './consultar-producto/consultar-producto.module#ConsultarProductoPageModule' },
  { path: 'reportar-imperfecto-producto', loadChildren: './reportar-imperfecto-producto/reportar-imperfecto-producto.module#ReportarImperfectoProductoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
