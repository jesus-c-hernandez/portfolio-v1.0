import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BoxProjectComponent } from './box-project/box-project.component';
import { combineLatest } from 'rxjs';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { ProjectInterface } from 'src/app/shared/types/project.interface';

@Component({
  selector: 'port-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, BoxProjectComponent],
})
export class ProjectsComponent {
  data$ = combineLatest({
    projects: this.projectsService.getProjects(),
  });

  constructor(
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  onClickProject(project: ProjectInterface) {
    this.router.navigate(['/projects', project.no]);
  }
}
