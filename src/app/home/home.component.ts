import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName:string = 'Safy'
  imgPath:string = './assets/Untitled2.png'
  imgWidth:number = 200

  work():void {
    alert('Hello')
  }
  sayHello():void {
    alert('keydown')
  }
}
