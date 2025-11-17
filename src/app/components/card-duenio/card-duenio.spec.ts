import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDuenio } from './card-duenio';

describe('CardDuenio', () => {
  let component: CardDuenio;
  let fixture: ComponentFixture<CardDuenio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDuenio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDuenio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
