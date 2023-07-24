import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillInterface } from '../types/skill.interface';
import { SkillsService } from '../services/skills.service';
import { combineLatest } from 'rxjs';
import { SkillInfoComponent } from './skill-info/skill-info.component';

@Component({
  selector: 'port-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, SkillInfoComponent, NgOptimizedImage],
})
export class SkillsComponent implements OnInit {
  isBtnOnActive: boolean = true;
  skillSelected: SkillInterface | null = null;

  data$ = combineLatest({
    skills: this.skillsService.getSkills(),
  });

  constructor(private router: Router, private skillsService: SkillsService) {}
  ngOnInit() {}

  onClickBtnOff() {
    this.isBtnOnActive = false;
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 800);
  }

  onClickSkill(skill: SkillInterface) {
    this.skillSelected = skill;
  }
}
