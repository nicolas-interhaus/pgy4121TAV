import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ZonaAPIService {

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }
  url="https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient) { }

getPost():Observable<any>{
  return this.http.get(this.url+'/posts/').pipe(
    retry(3)
  )
}

  getPostsId(id){
    return this.http.get(`${this.url}/posts/${id}`);
  }
}
