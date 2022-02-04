import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = false;
  countClicks = [];

  onToggleDisplayParagraph() {
    this.showParagraph = !this.showParagraph;
    // this.countClicks.push(this.countClicks.length + 1);
    this.countClicks.push(new Date());
  }

}
