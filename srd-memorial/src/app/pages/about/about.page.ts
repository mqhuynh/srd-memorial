import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  isReadMore = true
  constructor() { }

  ngOnInit() {
  }
  showText() {
     this.isReadMore = !this.isReadMore
  }
}