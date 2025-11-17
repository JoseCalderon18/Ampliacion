import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCasa } from './card-casa';

describe('CardCasa', () => {
  let component: CardCasa;
  let fixture: ComponentFixture<CardCasa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCasa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCasa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
