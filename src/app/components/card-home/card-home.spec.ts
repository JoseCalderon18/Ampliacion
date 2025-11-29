import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { CardHome } from './card-home';
import { ThemeService } from '../../services/theme.service';

describe('CardHome', () => {
  let component: CardHome;
  let fixture: ComponentFixture<CardHome>;
  let themeService: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    const themeServiceSpy = jasmine.createSpyObj('ThemeService', [], {
      isDarkMode: signal(false)
    });

    await TestBed.configureTestingModule({
      imports: [CardHome],
      providers: [
        { provide: ThemeService, useValue: themeServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHome);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService) as jasmine.SpyObj<ThemeService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cards array with 6 items', () => {
    expect(component.cards.length).toBe(6);
  });

  it('should have cardSeleccionada output', () => {
    expect(component.cardSeleccionada).toBeDefined();
  });

  it('should emit cardSeleccionada event when onCardClick is called', () => {
    spyOn(component.cardSeleccionada, 'emit');
    const testTitle = 'Test Card';
    component.onCardClick(testTitle);
    expect(component.cardSeleccionada.emit).toHaveBeenCalledWith(testTitle);
  });

  it('should have cards with required properties', () => {
    component.cards.forEach(card => {
      expect(card.title).toBeDefined();
      expect(card.icon).toBeDefined();
      expect(card.text).toBeDefined();
    });
  });
});
