import {Injectable} from '@angular/core';
import {CanActivate, CanLoad} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor() {}

  canActivate() {
    return true;
  }

  // Carga el modulo correspondiente despues de que se cumpla la condicion
  canLoad() {
    return true;
  }
}
