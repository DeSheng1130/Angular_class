import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  week: string[] = ['星期一', '星期二', '星期三'];

  now: any = new Date();

  users: object[] = [
    { name: 'apple', sex: '男' },
    { name: 'banana', sex: '女' },
    { name: 'deshneg', sex: '男' }
  ];

  scroe: string[] = ['10分', '20分', '30分', '40分', '50分', '60分', '70分', '80分'];

  constructor() { }

  ngOnInit() {
  }

}
