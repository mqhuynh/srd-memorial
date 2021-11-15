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
    this.auth.getAllUsers().subscribe((data) => {
      this.user= data.map((e) => ({
          id: e.payload.doc.id,
          isedit: false,
           email: e.payload.doc.data()['userEmail'],
          firstname: e.payload.doc.data()['userFirstname'],
          lastname: e.payload.doc.data()['userLastname'],
          isApproved: e.payload.doc.data()['IsApproved'],

        }));
      console.log(this.user);
    });
  }
  updateUserInfo(id: string) {
    console.log(id);
  }

  editUser(User){
    User.isedit = true ;
    User.editPermission = User.isApproved;

  }

  updateUser(userdata){
    let data = {};
    data ['IsApproved'] = userdata.isApproved;
    this.auth.updateUser(userdata.id, data);
    userdata.isedit = false;

  }

  deleteUser(user_id){
    this.auth.deleteUser(user_id);
  }

}

