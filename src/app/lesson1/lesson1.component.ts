import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {
  @Input() tw:number = 1;
  @Output() twMoneyChange:EventEmitter<number> = new EventEmitter<number>();
  //第一次載入後
  constructor() { }

  // 載入完成後第一個的 Funcation
  ngOnInit() {
  }

  test(){
    console.log("hello wolrd");
  }

}
