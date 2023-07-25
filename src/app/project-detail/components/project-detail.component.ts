import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest, filter } from 'rxjs';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'port-project-detail',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ProjectDetailComponent implements OnInit {
  isBtnOnActive: boolean = true;
  projectNo = this.route.snapshot.paramMap.get('no') ?? '';

  data$ = combineLatest({
    project: this.projectsService.getProjectByNo(this.projectNo),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {}

  onClickBtnOff() {
    this.isBtnOnActive = false;
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 800);
  }

  onClickView(url: string) {
    window.open(url, '_blank');
  }
}
