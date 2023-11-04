import { Component, Input } from '@angular/core';
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent {
  @Input()
  project!: Project;
}
