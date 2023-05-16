import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
  // providers: [UserService] // this is service injection in child component which will create new instance and overwrite the updated object coming from AppComponent level.
                              // And there will be nthing new to be pushed into users Object. 
})

export class AdduserComponent {
  username: string ='';
  status: string = 'active';
  constructor(private userservice :UserService){}
  AddUser(){
    this.userservice.AddNewUser(this.username,this.status);
  }

}
