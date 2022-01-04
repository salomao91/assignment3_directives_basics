import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonPressed;
  
  constructor() {
    this.isButtonPressed = false;
  }

  onDisplayButton() {
    this.isButtonPressed = true;
  }
}
