import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'port-top-console',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-console.component.html',
  styleUrls: ['./top-console.component.scss'],
})
export class TopConsoleComponent {
  @Output() isOn = new EventEmitter<boolean>();
  isBtnOnActive: boolean = true;

  constructor(private router: Router) {}

  onClickBtnOff() {
    this.isOn.emit();
    this.isBtnOnActive = false;
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 300);
  }
}
