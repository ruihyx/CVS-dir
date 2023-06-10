import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  users: User[] = [];
  userSubscription!: Subscription;

  constructor(private userService: UserService){}

  ngOnInit(): void{
    this.userSubscription = this.userService.fetchUsers().subscribe(users => this.users = users)
  }

}
