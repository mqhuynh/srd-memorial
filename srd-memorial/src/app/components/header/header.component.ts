import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input()title: string;
ShowTab: boolean;
  user: any;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user.userRole;
      if (user.userRole === 'admin') {
        this.ShowTab = true;
      } else {
        this.ShowTab = false;
      }
    });
  }
  logout() {
    this.auth.signOut();
  }//end of logout
}
