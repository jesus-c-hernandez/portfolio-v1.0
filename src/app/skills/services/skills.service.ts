import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SkillInterface } from '../types/skill.interface';
import { SkillResponseInterface } from '../types/skillResponse.interface';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillInterface[]> {
    return this.http
      .get<SkillResponseInterface>('../../../assets/files/skills.json')
      .pipe(map((response) => response.skills));
  }
}
