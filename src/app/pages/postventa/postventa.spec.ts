import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postventa } from './postventa';

describe('Postventa', () => {
  let component: Postventa;
  let fixture: ComponentFixture<Postventa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postventa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postventa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
