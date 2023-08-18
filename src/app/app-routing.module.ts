import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'exposant',
    loadChildren: () => import('./pages/exposant/exposant.module').then( m => m.ExposantPageModule)
  },
  {
    path: 'livre',
    loadChildren: () => import('./pages/livre/livre.module').then( m => m.LivrePageModule)
  },
  {
    path: 'livre-details/:id',
    loadChildren: () => import('./pages/livre-details/livre-details.module').then( m => m.LivreDetailsPageModule)
  },
  {
    path: 'exposant-details/:id',
    loadChildren: () => import('./pages/exposant-details/exposant-details.module').then( m => m.ExposantDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
