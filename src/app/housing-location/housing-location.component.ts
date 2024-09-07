import {Component, Input} from '@angular/core';
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      housing-location works!2
    </p>
  `,
  styles: ``,
  styleUrls: ['housing-location.components.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
