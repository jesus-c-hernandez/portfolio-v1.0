import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'port-btn-icon',
  templateUrl: 'btn-icon.component.html',
  styleUrls: ['./btn-icon.component.scss'],
  standalone: true,
})
export class BtnIconComponent {
  @Input() btnImage: string = '';
  @Input() btnText: string = 'text';
  @Input() imgAlt: string = 'no-image';
  @Input() route: string = '/';

  constructor(private router: Router) {}

  onClick() {
    this.router.navigateByUrl(this.route);
  }
}
