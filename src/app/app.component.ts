import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService] // we are getting new instance of UserService and looping over HTML
})
export class AppComponent implements OnInit{
  title = 'UserService';
  users:{name: string, status:string}[] = [];
 
  constructor(private userservice: UserService) {}
  ngOnInit(){
    this.users = this.userservice.users;
  }
}
