import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

const endpoint = '/tweet';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }


  getTrends(): Observable<any> {
   return this.http.get(`${environment.apiUrl}${endpoint}/trends`);
  }

}
