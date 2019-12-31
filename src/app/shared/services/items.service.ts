import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseUrl = '/items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
      return this.http.get<any>(this.baseUrl);
  }
}