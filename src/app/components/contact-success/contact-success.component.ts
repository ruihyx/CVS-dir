import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.css']
})
export class ContactSuccessComponent implements OnInit {
  name!: string;
  message!: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.message && this.userService.name){
      this.name = this.userService.name
    this.message = this.userService.message}
    console.log('name', this.name)

    }
   
  }
  


