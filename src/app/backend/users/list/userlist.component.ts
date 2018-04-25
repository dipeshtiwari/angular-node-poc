import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// provider
import { UsersService } from '../../../providers/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {
  loading: Boolean = false;
  usersList: Array<String> = [];

  constructor(
    private userService: UsersService,
    private ng4LoadingSpinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  startLoadingSpinner() {
    this.ng4LoadingSpinnerService.show();
    setTimeout(function() {
      this.ng4LoadingSpinnerService.hide();
    }.bind(this), 4000);
  }

  private loadAllUsers() {
    this.userService.getUsersList()
      .subscribe(data => {
        console.log(data);
        this.usersList = data;
      },
      error => {
        console.error(error);
      });
  }

  deletUser(userId: string) {

    this.userService.delete(userId)
    .subscribe(
      data => {
        this.loadAllUsers();
    }, error => {
      console.log(error);
    });

    // this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

}
