import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// provider
import { AuthenticationService } from '../../providers/authentication.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-admin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  loading = false;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = 'admin/dashboard';
    this.adminLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(F: NgForm) {
    // this.loading = true;

    this.authenticationService.login(F.value)
      .subscribe(
      data => {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.loading = false;
      });
  }
}
