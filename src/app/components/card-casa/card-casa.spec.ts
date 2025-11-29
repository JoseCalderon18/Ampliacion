import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCasaComponent } from './card-casa';
import { Casa } from '../../models/modelCasa';

describe('CardCasaComponent', () => {
  let component: CardCasaComponent;
  let fixture: ComponentFixture<CardCasaComponent>;
  let mockCasa: Casa;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCasaComponent);
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
      imagenes: ['img1.jpg']
    };
    
    component.casa = mockCasa;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
