import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  apiKey:string = "a4d689623a027889b87e4b4b467637c5";
  allTvs: any[] = []
  allData: any[] = []

  constructor(private http: HttpClient) {}

  getAllTv(pageNum:number = 1 , lang:string ='en-US'):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.apiKey}&page=${pageNum}&language=${lang}`) ;
 }
 getTvById(tvId:number) :Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.apiKey}`)
 }
 searchAllTvs (input:string) :Observable<any>{
  if(input == ""){
     return this.getAllTv();
  } else{
    return this.http.get(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1'&api_key=${this.apiKey}&query=${input}`)
  }
}
}
