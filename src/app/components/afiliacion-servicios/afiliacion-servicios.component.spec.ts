import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliacionServiciosComponent } from './afiliacion-servicios.component';

describe('AfiliacionServiciosComponent', () => {
  let component: AfiliacionServiciosComponent;
  let fixture: ComponentFixture<AfiliacionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfiliacionServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliacionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
