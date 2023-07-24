import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'port-area-tag',
  templateUrl: 'area-tag.component.html',
  styleUrls: ['./area-tag.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AreaTagComponent {
  @Input() areas: string[] | undefined = [];
}
