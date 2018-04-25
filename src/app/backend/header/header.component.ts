import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

// Provider
import { AuthenticationService } from '../../providers/authentication.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  @Output() navToggled = new EventEmitter();
  navOpen = false;
  returnUrl: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/login';
    // If nav is open after routing, close it
    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

  logout() {
    this.authentication.logout();
    this.router.navigate([this.returnUrl]);

  }

}
