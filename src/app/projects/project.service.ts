import { Injectable } from '@angular/core';
import { Project } from '../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return [];
  }
}
