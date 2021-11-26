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
      Name: 'Dr. Minh Huynh',
      Position: 'Project Manager',
      link: 'https://www.google.com/',
      Description: 'user one decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'Anish Gyawali',
      Position: 'Developer',
      link: 'https://www.google.com/',
      Description: 'user two decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'Subash Dangi',
      Position: 'Developer',
      link: 'https://www.google.com/',
      Description: 'user three decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'Roshan Bhandari',
      Position: 'Developer',
      link: 'https://www.google.com/',
      Description: 'user four decription',
    },
    {
      Image: '../../../assets/person.png',
      Name: 'Sandipa Pande',
      Position: 'Developer',
      link: 'https://www.google.com/',
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
