import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHome } from './card-home';

describe('CardHome', () => {
  let component: CardHome;
  let fixture: ComponentFixture<CardHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
