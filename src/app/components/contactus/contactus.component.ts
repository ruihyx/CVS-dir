import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{
  form!: FormGroup;
  submittedData?:any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService){}
    
    get name() {
      return this.form.get('name')
    }
  
    get message() {
      return this.form.get('message')
    }

    ngOnInit(): void {
      this.form = this.fb.group(
        {
          name:['',[Validators.required]],
          message:['',[Validators.required, Validators.minLength(10)]]
        }
      )
    }
    onsubmit():void{
      if(this.form.valid){
       
        this.userService.name = this.form.value.name
        this.userService.message = this.form.value.message
        this.router.navigate(['/contactsuccess'])
        console.log('this.userService.message', this.userService.message)
  
      }

    }

}
