import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl: string = 'https://localhost:5001/api/Books';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  availablebooks: any = []

  constructor(private httpClient: HttpClient) { }

  // Show lists of item
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
 
  }
  // Create new item
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`)
 
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data)

  }
  // Edit/ Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data)
  }
  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  
  }

  }

