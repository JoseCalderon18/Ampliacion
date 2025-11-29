import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CardInmuebleComponent } from './card-inmueble';
import { Casa } from '../../models/modelCasa';
import { ThemeService } from '../../services/theme.service';

describe('CardInmuebleComponent', () => {
  let component: CardInmuebleComponent;
  let fixture: ComponentFixture<CardInmuebleComponent>;
  let mockCasa: Casa;

  beforeEach(async () => {
    const themeServiceSpy = jasmine.createSpyObj('ThemeService', [], {
      isDarkMode: signal(false)
    });

    await TestBed.configureTestingModule({
      imports: [CardInmuebleComponent, RouterTestingModule],
      providers: [
        { provide: ThemeService, useValue: themeServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInmuebleComponent);
    component = fixture.componentInstance;
    
    // Crear una casa de prueba con todas las propiedades requeridas
    mockCasa = {
      id: '1',
      titulo: 'Casa de prueba',
      direccion: 'Calle de prueba 123',
      ciudad: 'Madrid',
      provincia: 'Madrid',
      cp: '28001',
      pais: 'España',
      lat: 40.4168,
      lng: -3.7038,
      precio: 200000,
      precioM2: 1666.67,
      antiguedad: 10,
      tipo: 'Casa',
      plantas: 2,
      metrosConstruidos: 120,
      terreno: 200,
      habitaciones: 3,
      banos: 2,
      descripcion: 'Descripción de prueba',
      orientacion: 'Sur',
      anoConstruccion: 2014,
      estado: 'Buen estado',
      extras: [],
      imagenes: ['img1.jpg', 'img2.jpg', 'img3.jpg']
    };
    
    component.casa = mockCasa;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first image', () => {
    expect(component.currentImageIndex).toBe(0);
  });

  it('should navigate to next image', () => {
    component.nextImage();
    expect(component.currentImageIndex).toBe(1);
  });

  it('should navigate to previous image', () => {
    component.currentImageIndex = 1;
    component.prevImage();
    expect(component.currentImageIndex).toBe(0);
  });

  it('should wrap to first image when at last image', () => {
    component.currentImageIndex = mockCasa.imagenes.length - 1;
    component.nextImage();
    expect(component.currentImageIndex).toBe(0);
  });

  it('should wrap to last image when at first image', () => {
    component.currentImageIndex = 0;
    component.prevImage();
    expect(component.currentImageIndex).toBe(mockCasa.imagenes.length - 1);
  });

  it('should return true when has multiple images', () => {
    expect(component.hasMultipleImages()).toBe(true);
  });

  it('should return false when has single image', () => {
    component.casa.imagenes = ['img1.jpg'];
    expect(component.hasMultipleImages()).toBe(false);
  });

  it('should emit propiedadSeleccionada event when onSaberMas is called', () => {
    spyOn(component.propiedadSeleccionada, 'emit');
    component.onSaberMas();
    expect(component.propiedadSeleccionada.emit).toHaveBeenCalledWith(mockCasa);
  });

  it('should emit imagenCambiada event when navigating images', () => {
    spyOn(component.imagenCambiada, 'emit');
    component.nextImage();
    expect(component.imagenCambiada.emit).toHaveBeenCalledWith(1);
  });

  it('should return default image when no images available', () => {
    component.casa.imagenes = [];
    expect(component.currentImage).toBe('assets/img/inicio1.jpeg');
  });
});

