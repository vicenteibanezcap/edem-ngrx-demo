import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanosComponent } from './thanos.component';
import { ThanosRoutingModule } from './thanos-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ThanosComponent],
  imports: [CommonModule, ThanosRoutingModule, MatButtonModule],
})
export class ThanosModule {}
