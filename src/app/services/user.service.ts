import { Injectable } from '@angular/core';

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  passwordHash: string; // Contraseña hasheada
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'inmobiliaria_users';
  private readonly DEFAULT_USERS: User[] = [
    {
      id: '1',
      nombre: 'Admin',
      apellido: 'Sistema',
      email: 'admin@leyvaeillescas.com',
      telefono: '+34 600 000 001',
      passwordHash: this.hashPassword('admin123')
    },
    {
      id: '2',
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@example.com',
      telefono: '+34 600 000 002',
      passwordHash: this.hashPassword('password123')
    }
  ];

  constructor() {
    this.initializeUsers();
  }

  private initializeUsers(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.DEFAULT_USERS));
    }
  }

  private getUsers(): User[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : this.DEFAULT_USERS;
  }

  private saveUsers(users: User[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }

  // Hash mejorado de contraseña (más largo y seguro)
  private hashPassword(password: string): string {
    // Salt fijo para mayor seguridad
    const salt = 'inmobiliaria_leyva_illescas_2024';
    const saltedPassword = password + salt;
    
    let hash = 0;
    let hash2 = 0;
    let hash3 = 0;
    
    // Múltiples pasadas para mayor complejidad
    for (let i = 0; i < saltedPassword.length; i++) {
      const char = saltedPassword.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
      
      hash2 = ((hash2 << 7) - hash2) + char * 3;
      hash2 = hash2 & hash2;
      
      hash3 = ((hash3 << 3) - hash3) + char * 7;
      hash3 = hash3 & hash3;
    }
    
    // Combinar los tres hashes y convertir a hexadecimal
    const combinedHash = Math.abs(hash).toString(16).padStart(8, '0') +
                        Math.abs(hash2).toString(16).padStart(8, '0') +
                        Math.abs(hash3).toString(16).padStart(8, '0') +
                        password.length.toString(16).padStart(2, '0') +
                        saltedPassword.length.toString(16).padStart(2, '0');
    
    // Agregar más complejidad con reversión y mezcla
    const reversed = combinedHash.split('').reverse().join('');
    const mixed = combinedHash.substring(0, 13) + reversed.substring(13, 26) + combinedHash.substring(26);
    
    return mixed.toUpperCase();
  }

  // Verificar contraseña
  private verifyPassword(password: string, hash: string): boolean {
    return this.hashPassword(password) === hash;
  }

  // Login
  login(email: string, password: string): { success: boolean; user?: User; message?: string } {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, message: 'Email o contraseña incorrectos' };
    }

    if (!this.verifyPassword(password, user.passwordHash)) {
      return { success: false, message: 'Email o contraseña incorrectos' };
    }

    // Guardar sesión
    localStorage.setItem('current_user', JSON.stringify({
      id: user.id,
      email: user.email,
      nombre: user.nombre,
      apellido: user.apellido
    }));

    return { success: true, user };
  }

  // Registro
  register(nombre: string, apellido: string, email: string, telefono: string, password: string): { success: boolean; message?: string } {
    const users = this.getUsers();

    // Validar email único
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Este email ya está registrado' };
    }

    // Validar email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Email no válido' };
    }

    // Validar contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
      return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
    }

    // Crear nuevo usuario
    const newUser: User = {
      id: Date.now().toString(),
      nombre,
      apellido,
      email: email.toLowerCase(),
      telefono,
      passwordHash: this.hashPassword(password)
    };

    users.push(newUser);
    this.saveUsers(users);

    return { success: true, message: 'Registro exitoso' };
  }

  // Obtener usuario actual
  getCurrentUser(): { id: string; email: string; nombre: string; apellido: string } | null {
    const stored = localStorage.getItem('current_user');
    return stored ? JSON.parse(stored) : null;
  }

  // Logout
  logout(): void {
    localStorage.removeItem('current_user');
  }

  // Verificar si hay sesión activa
  isLoggedIn(): boolean {
    return !!localStorage.getItem('current_user');
  }
}

