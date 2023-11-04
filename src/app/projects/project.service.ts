import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private URL = './assets/projects.json';
  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URL);
  }
}
