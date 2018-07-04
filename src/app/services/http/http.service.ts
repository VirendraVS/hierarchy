import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('http://localhost:8080/node');
  }
}
