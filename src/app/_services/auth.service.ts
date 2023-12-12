import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user:any){
    let userArray = [];
    if(localStorage.getItem('Users')){
      userArray = JSON.parse(localStorage.getItem('Users'))
    }
    return userArray.find( x => x.userName === user.userName && x.password === user.password)
  }
}
