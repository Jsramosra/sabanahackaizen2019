import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'desicionesf', loadChildren: './desicionesf/desicionesf.module#DesicionesfPageModule' },
  { path: 'calculo', loadChildren: './calculo/calculo.module#CalculoPageModule' },
  { path: 'comunidad', loadChildren: './comunidad/comunidad.module#ComunidadPageModule' },
  { path: 'tabs/bloqueo', loadChildren: './bloqueo/bloqueo.module#BloqueoPageModule' },
  { path: 'cifras', loadChildren: './cifras/cifras.module#CifrasPageModule' },
  { path: 'felicidad', loadChildren: './felicidad/felicidad.module#FelicidadPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
