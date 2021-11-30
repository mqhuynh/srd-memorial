import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user: any;
  menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/menu/about',
    },
    {
      title: 'Contact',
      path: '/menu/contact',
    },
    {
      title: 'Veterans',
      path: '/menu/veteran',
    },
    {
      title: 'Admin',
      path: '/menu/admin-portal',
    },
  ];
  title = 'Home';
  constructor(
    private auth: AuthService,
    private menuCtrl: MenuController,
    private plt: Platform
  ) {}

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
    this.auth.user$.subscribe((user) => {
      this.user = user;
    });
  }
  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }

  setTitle(title) {
    this.title = title;
  }
  logout() {
    this.auth.signOut();
  } //end of logout
}
