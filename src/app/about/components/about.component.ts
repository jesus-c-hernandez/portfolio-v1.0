import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopConsoleComponent } from 'src/app/shared/components/top-console/top-console.component';

@Component({
  selector: 'port-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, TopConsoleComponent],
})
export class AboutComponent {
  isBtnOnActive: boolean = true;

  onClickBtnOff() {
    this.isBtnOnActive = false;
  }
}
