import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SessionStoreService } from '../../services/session-store.service';

@Component({
  styles: [
    `.nav-item {
      border-bottom: none;
    }`
  ],
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  constructor(
    private session: SessionStoreService,
    private router: Router
  ) {}

  logout() {
    this.session.setAuthInformation(null);
    this.router.navigate(['/pages/login']);
  }

}
