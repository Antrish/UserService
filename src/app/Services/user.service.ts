import { Injectable } from "@angular/core";
import { ConsoleLogger } from "./consolelogger.service";
@Injectable()
export class UserService{
    constructor(private clogger : ConsoleLogger){}
    users = [
        {name:'John', status : 'active'},
        {name:'Glein', status : 'inactive'},
        {name:'Antrish', status : 'active'}
    ]
    AddNewUser(name:string,status:string){
        this.users.push({name:name, status:status});
        this.clogger.AddLoggMessage(name,status);
    }
}