import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propert-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertBindingComponent {
  @Input() result = 0;

}
