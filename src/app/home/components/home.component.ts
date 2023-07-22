import { Component } from '@angular/core';
import { BtnHomeData } from '../types/btnHome.interface';
import { BtnIconComponent } from './btn-icon/btn-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'port-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, BtnIconComponent],
})
export class HomeComponent {
  btnList: BtnHomeData[] = [
    {
      img: 'https://i.ibb.co/pf0Q79C/user-removebg-preview-v1.png',
      imgAlt: 'skin-dev',
      route: '/about',
      text: 'About',
    },
    // {
    //   img: 'https://i.ibb.co/mXdqx16/pixil-frame-0.png',
    //   imgAlt: 'projects',
    //   route: '/projects',
    //   text: 'Projects',
    // },
    // {
    //   img: 'https://i.ibb.co/P9kTJh5/skills.png',
    //   imgAlt: 'skills',
    //   route: '/skills',
    //   text: 'Skills',
    // },
    // {
    //   img: 'https://i.ibb.co/3Ms8xZg/email.png',
    //   imgAlt: 'contact',
    //   route: '/contact',
    //   text: 'Contact',
    // },
  ];
}
