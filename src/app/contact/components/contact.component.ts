import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopConsoleComponent } from 'src/app/shared/components/top-console/top-console.component';

@Component({
  selector: 'port-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, TopConsoleComponent],
})
export class ContactComponent {
  isBtnOnActive: boolean = true;
  emailCopied: boolean = false;

  onClickBtnOff() {
    this.isBtnOnActive = false;
  }

  openNewWindow(link: string): void {
    window.open(link, '_blank');
  }

  copyToClipboard() {
    navigator.clipboard.writeText('jesus.castaneda.hdez@gmail.com');
    this.emailCopied = true;
  }
}
