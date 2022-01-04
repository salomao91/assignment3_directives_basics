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
    if (this.isButtonPressed) {
      this.isButtonPressed = false;
    }
    else {
      this.isButtonPressed = true;
    }
  }

  offDisplayButton() {
    this.isButtonPressed = false;
  }
}
