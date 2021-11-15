import { Component, OnInit } from '@angular/core';
import {AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.page.html',
  styleUrls: ['./admin-portal.page.scss'],
})
export class AdminPortalPage implements OnInit {
  user : any;

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }
  
}

