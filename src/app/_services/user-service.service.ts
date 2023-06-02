import { Injectable } from '@angular/core';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }

  addUser(user : User){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user,...users];   //spread operator mean element can expand ==> array
    }else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
