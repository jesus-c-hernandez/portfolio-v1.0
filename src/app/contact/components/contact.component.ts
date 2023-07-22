import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'port-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ContactComponent implements OnInit {
  isBtnOnActive: boolean = true;
  emailCopied: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickBtnOff() {
    this.isBtnOnActive = false;
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 800);
  }

  openNewWindow(link: string): void {
    window.open(link, '_blank');
  }

  copyToClipboard() {
    navigator.clipboard.writeText('jesus.castaneda.hdez@gmail.com');
    this.emailCopied = true;
  }
}
