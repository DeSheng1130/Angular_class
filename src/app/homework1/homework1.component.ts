import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss']
})
export class Homework1Component implements OnInit {

  chiName: string = "";
  engName: string = "";
  show: boolean = false;
  nameList: object[] = [
  ];
  constructor() {
  }

  ngOnInit() {
  }

  saveName() {
    this.nameList.push({
      'chiName': this.chiName,
      'engName': this.engName
    })
    this.show = true;
  }

}
