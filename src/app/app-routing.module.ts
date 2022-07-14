import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: async () => (await import('./features/board/board.module')).BoardModule,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'game',
  },
  {
    path: '**',
    redirectTo: 'game',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
