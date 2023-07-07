import { UserServiceService } from './../../_services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/_model/user';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm : FormGroup;
  user : User;
  userSubmitted:boolean;
  text: boolean = false ; 

  constructor(private fb:FormBuilder,
              private userService:UserServiceService,
              private alertfy : AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null,Validators.required),
    //   email: new FormControl(null,[Validators.required , Validators.email]),
    //   password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null,Validators.required),
    //   mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)]),

    // },this.cofirmPasswordValidation);     //add custom validator
    this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required , Validators.email]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      confirmPassword: [null,Validators.required],
      mobile: [null,[Validators.required, Validators.maxLength(10)]],
    },{validators:this.cofirmPasswordValidation});
  }

  cofirmPasswordValidation(fg:FormGroup) : Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : 
    {notmatched: true}
  }


  //Getters methods
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registerationForm)
    this.userSubmitted = true;
    if(this.registerationForm.valid){
      // this.user = Object.assign(this.user,this.registerationForm.value)  //kol el values htro7 tt-save in DB
      // this.userService.addUser(this.user);
      this.userService.addUser(this.userDate());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertfy.success('Congratulation, you have registered successfully')
    }else {
      this.alertfy.error('Kindly provide required fields')
    }
  }
  userDate(): User {  //3shan msh kol el registerationForm a3mlha add fel DB mthln f 3mln map ll user bel values elly 3ayz a save bs
    return this.user = {
      userName : this.userName.value,   //this.username ==>from Getters
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }
  }

}
