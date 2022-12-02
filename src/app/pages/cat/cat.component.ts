import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICatFact } from './interfaces/cat.interface';
import { CatService } from './services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit, OnDestroy {
  catFact: ICatFact = { fact: '', length: 0 };
  private catServiceSub: Subscription;
  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catServiceSub = this.catService.getCatFact().subscribe((response) => {
      this.catFact = response;
    });
  }

  ngOnDestroy(): void {
    this.catServiceSub.unsubscribe();
  }
}
