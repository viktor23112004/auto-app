import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(private router: Router) {}

  logout() {
    const confirmation = confirm("Logout?")

    if(confirmation) {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
  }

}
