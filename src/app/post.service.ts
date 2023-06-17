import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://639ad18fd514150197403be5.mockapi.io/api/posts';
  constructor(private http: HttpClient) {}

  getAlllPosts = () => {
    return this.http.get(this.url);
  };

  loginFacebook(){
    return this.http.get('http://localhost:8000/api/v1/auth/google')
  }
}
