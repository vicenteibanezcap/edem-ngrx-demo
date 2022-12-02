import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'person',
    loadChildren: () =>
      import('./pages/person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'thanos',
    loadChildren: () =>
      import('./pages/thanos/thanos.module').then((m) => m.ThanosModule),
  },
  {
    path: 'cat',
    loadChildren: () =>
      import('./pages/cat/cat.module').then((m) => m.CatModule),
  },
  { path: '**', redirectTo: 'person' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
