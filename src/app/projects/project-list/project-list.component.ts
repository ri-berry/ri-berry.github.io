import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from 'src/app/shared/project';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  private projectsSubscription: Subscription | undefined;
  private getProjectsObserver: Observer<Project[]> = {
    next: (projects) => {this.projects = projects},
    error: (err) => {
      console.error(`Something went wrong retrieving projects: ${err}.`);
    },
    complete: () => {
      console.log(`Subscription complete. No more updates.`);
    }
  }
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsSubscription =  this.projectService.getProjects().subscribe(this.getProjectsObserver);
  }

  ngOnDestroy(): void {
    this.projectsSubscription?.unsubscribe();
  }

}
