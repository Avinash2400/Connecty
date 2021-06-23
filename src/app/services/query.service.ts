import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  url = app_config.api_url + '/query';
  constructor(private http: HttpClient) {}

  addQuery(data: any) {
    return this.http.post(this.url + '/add', data);
  }

  getAll() {
    return this.http.get(this.url + '/getall');
  }

  getQueryByUser(id) {
    return this.http.get(this.url + '/getbyuser/' + id);
  }
}
