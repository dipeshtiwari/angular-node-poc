import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// providers
import { AuthenticationService } from '../../providers/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authenticationService:AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // user login
  login(value: any) {
    this.loading = true;
      this.authenticationService.login(value)
         .subscribe(
             data => {
               this.router.navigate(['/dashboard']);
             },
             error => {
                 // this.alertService.error(error);
                 this.loading = false;
             });
  }

  submitForm(value: any){
    console.log(value);
  }

}
