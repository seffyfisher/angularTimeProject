import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hour and time';
  parentCurrentDate:Date;
  
  // parentCurrentDate:Date = new Date();  

  // currentHour:number = this.parentCurrentDate.getHours();
  
  // hoursInWords :Array<string> = [
  //   "zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven",
  //   "twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty",
  //   "twenty-one","twenty-two","twenty-three","twenty-four"
  // ];

  // hourToWord():string{
  //   let hourWord = this.hoursInWords[this.currentHour]+" o'clock";
  //   return hourWord;
  // }

}
