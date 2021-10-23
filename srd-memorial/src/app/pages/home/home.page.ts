import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class HomePage implements OnInit {
  show: boolean = true;
  user: any;
  option = {
    slidesPerView: 1,
    speed: 86400000,
    centeredSlides: true,
    loop: true,
    spaceBetween: 5,
    autoplay: true,
  };
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  logout() {
    this.auth.signOut();
  } //end of logout
}
