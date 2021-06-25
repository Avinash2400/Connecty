import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = app_config.api_url + '/review';

  constructor(private http: HttpClient) {}

  addReview(data: any) {
    return this.http.post(this.url + '/add', data);
  }

  getById(id: String) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  getByUser(id: String) {
    return this.http.get(this.url + '/getbyuser/' + id);
  }

  deleteReview(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }

  getAll() {
    return this.http.get(this.url + '/getall');
  }

  update(id: String, data: Object) {
    return this.http.put(this.url + '/update/' + id, data);
  }

  uploadAvatar(file: any) {
    return this.http.post(app_config.api_url + '/util/addimg', file);
  }

  addUpdate(id, data) {
    return this.http.put(this.url + '/pushupdate/' + id, data);
  }
}
