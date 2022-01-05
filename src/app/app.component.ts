import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonPressed;
  buttonPressedNumbers = [];
  countButtonPressed;
  
  constructor() {
    this.isButtonPressed = false;
    this.countButtonPressed = 0;
  }

  onDisplayButton() {
    this.countButtonPressed++;
    this.buttonPressedNumbers.push(this.countButtonPressed);

    if (this.isButtonPressed) {
      this.isButtonPressed = false;
    }
    else {
      this.isButtonPressed = true;
    }
  }

}
