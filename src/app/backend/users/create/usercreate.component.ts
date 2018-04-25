import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

// Providers
import { UsersService } from '../../../providers/users.service';
import { error } from 'util';

@Component({
  selector: 'app-user-create',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UserCreateComponent implements OnInit {
  loading: Boolean = false;
  userCreateForm: FormGroup;
  errorMessage: String;
  gender: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.userCreateForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      gender: [''],
      password: ['password'],
      email: ['', Validators.required]
    });
  }

  // Create User
  createUser(): void {
    this.userService.create(this.userCreateForm.value)
      .subscribe((data) => {
        this.userCreateForm.reset(); // reset the form
        this.errorMessage = data.message;
      }, error => {
        let err;
        err = JSON.parse(error._body);
        this.errorMessage = err.message;
      });
   }
}


