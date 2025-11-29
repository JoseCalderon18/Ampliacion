import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { Form } from './form';
import { EmailService } from '../../services/emailService';
import { ThemeService } from '../../services/theme.service';
import Swal from 'sweetalert2';

describe('Form', () => {
  let component: Form;
  let fixture: ComponentFixture<Form>;
  let emailService: jasmine.SpyObj<EmailService>;
  let themeService: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    // Mock de SweetAlert2 para evitar que se muestren alertas durante los tests
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: true, isDismissed: false, value: true } as any));

    const emailServiceSpy = jasmine.createSpyObj('EmailService', ['sendEmail']);
    const themeServiceSpy = jasmine.createSpyObj('ThemeService', [], {
      isDarkMode: signal(false)
    });

    await TestBed.configureTestingModule({
      imports: [Form],
      providers: [
        { provide: EmailService, useValue: emailServiceSpy },
        { provide: ThemeService, useValue: themeServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form);
    component = fixture.componentInstance;
    emailService = TestBed.inject(EmailService) as jasmine.SpyObj<EmailService>;
    themeService = TestBed.inject(ThemeService) as jasmine.SpyObj<ThemeService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form fields', () => {
    expect(component.nombre).toBe('');
    expect(component.email).toBe('');
    expect(component.asunto).toBe('');
    expect(component.mensaje).toBe('');
  });

  it('should have emailEnviado and errorEnvio outputs', () => {
    expect(component.emailEnviado).toBeDefined();
    expect(component.errorEnvio).toBeDefined();
  });

  it('should emit emailEnviado event on successful email send', async () => {
    spyOn(component.emailEnviado, 'emit');
    emailService.sendEmail.and.returnValue(Promise.resolve({ status: 200, text: 'OK' } as any));
    
    component.nombre = 'Test';
    component.email = 'test@test.com';
    component.asunto = '1';
    component.mensaje = 'Test message';
    
    await component.enviarEmail();
    
    expect(component.emailEnviado.emit).toHaveBeenCalledWith(true);
  });

  it('should emit errorEnvio event on email send failure', (done) => {
    spyOn(component.errorEnvio, 'emit');
    const errorMessage = 'Error al enviar';
    emailService.sendEmail.and.returnValue(Promise.reject(new Error(errorMessage)));
    
    component.nombre = 'Test';
    component.email = 'test@test.com';
    component.asunto = '1';
    component.mensaje = 'Test message';
    
    component.enviarEmail();
    
    // Esperar a que se complete la promesa (el catch se ejecuta asíncronamente)
    setTimeout(() => {
      expect(component.errorEnvio.emit).toHaveBeenCalledWith('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      done();
    }, 200);
  });

  it('should convert asunto number to text correctly', () => {
    expect(component['obtenerAsusnto']('1')).toBe('Solicitar Informacion');
    expect(component['obtenerAsusnto']('2')).toBe('Consulta sobre algún Inmueble');
    expect(component['obtenerAsusnto']('3')).toBe('Otro');
    expect(component['obtenerAsusnto']('4')).toBe('Sin asunto');
  });
});
