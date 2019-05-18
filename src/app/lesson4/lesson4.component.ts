import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {
  account: Account[] =[
    {
      account: 'test',
      password: 'pass'
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}

export interface Account {
  account: string,
  password: string,
  email?:string
}