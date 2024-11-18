import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/api/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isLoggedIn()) {
      return true; // Autorise l'accès à la route
    } else {
      this.router.navigate(['/conn-auth']); // Redirige vers la page de connexion
      return false;
    }
  }
}
