import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat.component';
import { CatRoutingModule } from './cat-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CatService } from './services/cat.service';

@NgModule({
  declarations: [CatComponent],
  imports: [CommonModule, CatRoutingModule, HttpClientModule],
  providers: [CatService],
})
export class CatModule {}
