import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'port-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AboutComponent {
  isBtnOnActive: boolean = true;

  constructor(private router: Router) {}

  onClickBtnOff() {
    this.isBtnOnActive = false;
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 800);
  }
}
