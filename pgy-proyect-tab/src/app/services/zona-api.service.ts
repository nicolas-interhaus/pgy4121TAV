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
  url='https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }

  
  getAlbums():Observable<any>{
    return this.http.get(this.url+'/albums/').pipe(retry(3));
  }

  getPostbyId(id:any):Observable<any>{
    return this.http.get(this.url+'/posts/'+id).pipe(
      retry(3)
    );
  }

  createItem(post: string):Observable<any>{
    return this.http.post(this.url+'/post/'+post,this.httpOptions)
    .pipe(retry(3));
  }

  updateAlbum(id:any,post:any):Observable<any>{
    console.log(this.url+'/albums/'+id);
    console.log(post);
    console.log(this.httpOptions);
    return this.http.put(this.url+'/albums/'+id,post,this.httpOptions).pipe(retry(3));

  }

}
