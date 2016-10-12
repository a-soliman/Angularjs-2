import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()" >Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked() {
    alert("it Worked!")
  }

}
