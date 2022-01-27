import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  info1: string[] = ["Adam", "A123", "ad@123.net"]
  info2: string[] = ["Shane", "S163", "sh@123.net"]
  info3: string[] = ["Taylor", "T325", "ta@123.net"]

  url = "https://jsonplaceholder.typicode.com/users"

  getinfo1() {
    return this.info1;
  }
  getinfo2() {
    return this.info2;
  }
  getinfo3() {
    return this.info3;
  }
  
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
