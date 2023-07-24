import { Component, Input } from '@angular/core';
import { AreaTagComponent } from '../area-tag/area-tag.component';
import { SkillInterface } from '../../types/skill.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'port-skill-info',
  templateUrl: 'skill-info.component.html',
  styleUrls: ['./skill-info.component.scss'],
  standalone: true,
  imports: [CommonModule, AreaTagComponent],
})
export class SkillInfoComponent {
  @Input() skill: SkillInterface | null = null;
}
