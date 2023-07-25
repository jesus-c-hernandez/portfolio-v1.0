import { Component, Input } from '@angular/core';
import { ProjectInterface } from 'src/app/shared/types/project.interface';

@Component({
  selector: 'port-box-project',
  templateUrl: 'box-project.component.html',
  styleUrls: ['./box-project.component.scss'],
  standalone: true,
})
export class BoxProjectComponent {
  @Input() project: ProjectInterface | null = null;
}
