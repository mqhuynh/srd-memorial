import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(
    private auth:AuthService,
    private toastr:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }
  login()
  {
    if(this.email,this.password)
    {
      this.auth.SignIn(this.email,this.password);
    }else{
      this.toast('please enter correct email & password','warning');
    }
    
  }
  forget(){
    this.router.navigate(['/forget-password']);
  }//end of forget password
  
  async toast(message,status){
    const toast =await this.toastr.create({
      message:message,
      color: status,
      position: 'top',
      duration:2000
    });
    toast.present();
  }

}
