import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['../user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public user:User = new User()
  constructor() { }

  ngOnInit() {
  }

  public save(){
    console.log(this.user)
    alert("Registration successful!")
  }

}
