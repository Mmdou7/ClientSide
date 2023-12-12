import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService,
    private alertfy : AlertifyService,
    private router : Router) { }

  ngOnInit() {
  }

  onLogin(form:NgForm){
    console.log(form.value);
    const token =  this.authService.authUser(form.value)
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertfy.success('You have login successfully');
      this.router.navigate(['/']);
    }else{
      this.alertfy.error('User name or password might be wrong')
    }
    form.reset();
  }

}
