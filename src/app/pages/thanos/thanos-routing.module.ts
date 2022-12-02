import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanosComponent } from './thanos.component';

const routes: Routes = [
  {
    path: '',
    component: ThanosComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThanosRoutingModule {}
