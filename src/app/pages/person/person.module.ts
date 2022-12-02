import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [PersonComponent],
  imports: [CommonModule, PersonRoutingModule, MatButtonModule],
})
export class PersonModule {}
