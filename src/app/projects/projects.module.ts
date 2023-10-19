import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectSummaryComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [ProjectService],
})
export class ProjectsModule {}
