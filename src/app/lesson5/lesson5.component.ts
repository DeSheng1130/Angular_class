import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})
export class Lesson5Component implements OnInit {
  tw: number = 100;
  @Output() countChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  getOut(){
    alert('OAO');
  }


}
