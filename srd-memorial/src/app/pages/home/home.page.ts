import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PopoverController, IonSlides } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { PopoverPage } from '../popover/popover.page';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class HomePage implements OnInit {
  //@ViewChild('slider') slider: IonSlides;
  show: boolean = true;
  user: any;
  Images = [
    {
      HomeScreen: '../../../assets/image05.jpg',
    },
    {
      HomeScreen: '../../../assets/image06.jpg',
    },
    {
      HomeScreen: '../../../assets/image07.jpg',
    },
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 4000,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  constructor(
    private auth: AuthService,
    public popoverController: PopoverController
  ) {}
  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }
  async popClick(event) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      cssClass: 'custom-popover',
      event,
      translucent: true,
    });
    return await popover.present();
  }
  logout() {
    this.auth.signOut();
  } //end of logout
}
