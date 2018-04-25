import { Component, OnInit } from '@angular/core';
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
    
  ) { }

  ngOnInit() {
    this.loadAllUsers();
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
