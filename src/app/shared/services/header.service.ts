import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeader(): HttpHeaders {

    const token = localStorage.getItem('token');
    const parseToken = JSON.parse(token!);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${parseToken}`,
      'Content-Type': 'application/json'
    });
    return headers;
  }
}
