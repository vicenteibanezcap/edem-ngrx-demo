import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanosComponent } from './thanos.component';

describe('ThanosComponent', () => {
  let component: ThanosComponent;
  let fixture: ComponentFixture<ThanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThanosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
