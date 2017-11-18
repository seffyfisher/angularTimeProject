import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-hour',
  templateUrl: './current-hour.component.html',
  styleUrls: ['./current-hour.component.css']
})
export class CurrentHourComponent implements OnInit {

  @Input() currentHour:string;
  

  constructor() { }

  ngOnInit() {
  }

}
