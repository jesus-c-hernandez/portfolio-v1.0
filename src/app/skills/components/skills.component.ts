import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillInterface } from '../types/skill.interface';
import { SkillsService } from '../services/skills.service';
import { combineLatest } from 'rxjs';
import { SkillInfoComponent } from './skill-info/skill-info.component';
import { TopConsoleComponent } from 'src/app/shared/components/top-console/top-console.component';

@Component({
  selector: 'port-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SkillInfoComponent,
    NgOptimizedImage,
    TopConsoleComponent,
  ],
})
export class SkillsComponent implements OnInit {
  isBtnOnActive: boolean = true;
  skillSelected: SkillInterface | null = null;

  data$ = combineLatest({
    skills: this.skillsService.getSkills(),
  });

  constructor(private skillsService: SkillsService) {}
  ngOnInit() {}

  onClickBtnOff() {
    this.isBtnOnActive = false;
  }

  onClickSkill(skill: SkillInterface) {
    this.skillSelected = skill;
  }
}
