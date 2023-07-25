import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, filter, map } from 'rxjs';
import { ProjectInterface } from '../types/project.interface';
import { ProjectResponseInterface } from '../types/projectsResponse.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectInterface[]> {
    return this.http
      .get<ProjectResponseInterface>('../../../assets/files/projects.json')
      .pipe(map((response) => response.projects));
  }

  getProjectByNo(no: string): Observable<ProjectInterface> {
    return this.http
      .get<ProjectResponseInterface>('../../../assets/files/projects.json')
      .pipe(
        map((response) => {
          const project = response.projects.find(
            (project) => project.no === no
          );
          if (project) return project;

          throw new Error('Project not found');
        })
      );
  }
}
