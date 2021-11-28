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
      Image: '../../../assets/mhuynh.jpg',
      Name: 'Dr. Minh Huynh',
      Position: 'Project Manager',
      link: 'http://www.southeastern.edu/acad_research/depts/mrkt_scm/faculty/mhuynh/index.html',
      Description: 'Minh Q. Huynh is a Professor of MIS at Southeastern Louisiana University. He received his Ph.D. from State University of New York at Binghamton, and his B.S. in Computer Sciences from University of Maryland University College. His teaching interests are in the areas of E-Commerce, Digital Marketing, Web Design, Introduction to MIS.  His research interests include software development using open source, web database implementation, web apps, technology supported distance education, IT for small businesses. His publications appear in journals such as the Journal of Information Technology Education: Innovations in Practice (JITE:IIP), the Communications of ACM, Journal of AIS, Communications of AIS, European Journal of IS, Journal of Electronic Commerce in Organizations, Journal of Information Systems Education, Business Studies Journal.  He currently serves as Editor for Journal of Information Technology Education: Innovations in Practice and Journal of Information Technology Education: Research.',
    },
    {
      Image: '../../../assets/Anish.png',
      Name: 'Anish Gyawali',
      Position: 'Developer',
      link: 'https://www.linkedin.com/in/anish-gyawali7/',
      Description: 'Anish is a senior Computer science major at southeastern Louisiana university. Anish has been attending southeastern since fall 2019 and currently works as a lab attendant for Student Technology Center. Anish loves programming and tries to play with different types of programming languages. Apart from computer science, Anish enjoys traveling, reading novels, video games, and writing occasionally.',
    },
    {
      Image: '../../../assets/Subash.jpg',
      Name: 'Subash Dangi',
      Position: 'Developer',
      link: 'https://www.linkedin.com/in/subash-dangi-86954a1b6/',
      Description: 'Subash Dangi is a senior majoring in Computer Science at Southeastern Louisiana University. He is graduating in Fall 2021.  He is interested in web design and development. Besides that, he loves playing mobile games, reading novels, and travelling.',
    },
    {
      Image: '../../../assets/Roshan.jpeg',
      Name: 'Roshan Bhandari',
      Position: 'Developer',
      link: 'https://www.linkedin.com/in/roshan-bhandari/',
      Description: 'A senior computer science major at Southeastern Louisiana University.He is interested in communication, web design and development. In addition to that, He has been working on campus as a computer science tutor. Besides  his passion in programming, he loves traveling, reading, playing outdoor games, and making new friends',
    },
    {
      Image: '../../../assets/Sandipa.png',
      Name: 'Sandipa Pande',
      Position: 'Developer',
      link: 'https://www.linkedin.com/in/sandipa-pande/',
      Description: 'A senior computer science major at SLU .She has represented her leadership skill as a vice president of women in technology on campus and as a social media manager for association of women in computing. In addition to that,she has been working on campus as a mathematics and a computer science tutor. Besides  her passion in programming, she loves traveling, cooking, making new friends and  taking pictures.',
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
