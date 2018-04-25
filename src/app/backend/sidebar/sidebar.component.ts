import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

// Provider
import { AuthenticationService } from '../../providers/authentication.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AdminSidebarHeaderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
