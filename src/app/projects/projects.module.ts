import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [ProjectListComponent, ProjectSummaryComponent],
  imports: [CommonModule, ProjectsRoutingModule, MatCardModule, MatGridListModule],
  providers: [ProjectService],
})
export class ProjectsModule {}
