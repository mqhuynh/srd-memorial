import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  showMore = false;
  Description = [
    {
      Image: '../../../assets/person.png',
      Name: 'user 1',
      Position: '/',
      Description: 'user one decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'user 2',
      Position: '/',
      Description: 'user two decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'user 3',
      Position: '/',
      Description: 'user three decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'user 4',
      Position: '/',
      Description: 'user four decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'user 5',
      Position: '/',
      Description: 'user five ',
    },
  ];
  constructor() {}

  ngOnInit() {}
  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + '...'
      : string;
  }
}
