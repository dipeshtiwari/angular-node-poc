import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submitForm(value: any){
    console.log(value);
  }

}
