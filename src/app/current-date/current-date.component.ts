import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.css']
})
export class CurrentDateComponent implements OnInit {
  currentTime: Date = new Date();
  color: 'brown';
  constructor() {}

  ngOnInit() {

  }

}
