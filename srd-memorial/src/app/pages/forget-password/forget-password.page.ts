import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  email: string;

  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private LoadingCtrl: LoadingController
  ) { }

  ngOnInit() {

  }
  async resetPassword(){
    if(this.email){
      const loading= await this.LoadingCtrl.create({
        message:'Please wait...',
        spinner:'crescent',
        showBackdrop: true
      });
      loading.present();
      this.afauth.sendPasswordResetEmail(this.email)
      .then(()=>{
        loading.dismiss();
        this.toast('Please check your email','success');
        this.router.navigate(['/login']);
     })
     .catch((error)=>{
       loading.dismiss();
       this.toast(error.message,'danger');

     })

    }
    else{
      this.toast('Please Enter your email address', 'danger');

    }
    
  }
  // end of forget password
  
  
  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  } // end of toast
}
