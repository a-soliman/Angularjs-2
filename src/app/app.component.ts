import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  testData: string[] = [];

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.testData.push('New Item: ' + i);
    }
  }
}
