import { Injectable } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser
} from '@angular/fire/auth';
import { Usuario, UsuarioLogin, UsuarioRegistro } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {  // ← Cambiar nombre aquí

  constructor(private auth: Auth) {}

  async register(data: UsuarioRegistro): Promise<FirebaseUser> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );
      return userCredential.user;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  async login(data: UsuarioLogin): Promise<FirebaseUser> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );
      return userCredential.user;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  getCurrentUser(): FirebaseUser | null {
    return this.auth.currentUser;
  }

  isAuthenticated(): boolean {
    return this.auth.currentUser !== null;
  }

  private handleError(error: any): string {
    const errorMessages: { [key: string]: string } = {
      'auth/email-already-in-use': 'Este correo ya está registrado',
      'auth/invalid-email': 'Correo electrónico inválido',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
      'auth/user-not-found': 'Usuario no encontrado',
      'auth/wrong-password': 'Contraseña incorrecta',
      'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde'
    };
    
    return errorMessages[error.code] || 'Error en la autenticación';
  }
}