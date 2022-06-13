import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient
} from '@angular/common/http';
import { Usernterface } from './request.interface';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  api = 'https://62a5db04430ba53411cdb4f5.mockapi.io/api/v1/users'
  constructor(protected http: HttpClient) { }

  postUser(params: Usernterface): Observable<any> {
    return this.http.post(this.api, params);
  }

}
