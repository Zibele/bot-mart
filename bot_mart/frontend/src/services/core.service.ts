import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Core } from '../models/core.model';

const baseUrl = 'http://localhost:8080/api/core';


@Injectable({
  providedIn: 'root'
})

export class CoreService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<Core[]>{
    return this.http.get<Core[]>(baseUrl);
  }

  getId(id : any): Observable<Core>{
    return this.http.get<Core>('${baseUrl}/${id}');
  }

  findByTitle(title : any): Observable<Core>{
    return this.http.get<Core>('${baseUrl}?title=${title}')
  }

}
