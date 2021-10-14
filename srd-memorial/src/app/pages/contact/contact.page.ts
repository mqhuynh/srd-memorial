import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  googleForm() {
    console.log('bitton clicked');
    this.router.navigateByUrl(
      'https://docs.google.com/forms/d/e/1FAIpQLScqItVpH-z5GBb9_VV3cWrxemzjNwhMpM5f89-zFL9RQmxNWA/viewform?usp=sf_link'
    );
  }
}
