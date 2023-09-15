import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator/typings';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  apiKey ="a4d689623a027889b87e4b4b467637c5";
  allTvs:any[] =[];
  allData:any[] =[];
  currentLang:any = "en-US"
  //LATE
  totalTVs!:number;
  tvsPerPage:number = 20;
  currentPage :number = 1
  private searchval:any
  
  set searchValue(value: string) {
    this.searchval = value;
    this.searchAllTvs(value);
  }

  constructor(private allTvShowsServ:TvService , private http:HttpClient){}

  ngOnInit(): void {
    this.allTvShowsServ.getAllTv(this.currentPage,this.currentLang).subscribe({
      next:(res) => {
         console.log(res.results);
         this.allTvs = res.results
         this.allData = this.allTvs;
         this.totalTVs = res.total_results
      } 
    });
  }
   searchAllTvs(movieTitle:string){
         this.allTvShowsServ.searchAllTvs(movieTitle).subscribe({
          next:(res)=>{
               this.allTvs = res.results;
               this.allData = this.allTvs;
              //  console.log(res);
                             
          }
         })

  }
  changeLanguage(){
       this.currentLang = this.currentLang == 'en-US'?'ar-SA':'en-US';
       this.allTvShowsServ.getAllTv(this.currentPage,this.currentLang).subscribe({
        next:(res)=>{
             this.allTvs = res.results;
             this.allData = this.allTvs;
              // console.log(res);
                           
        }
       })

  }
  changePage(pageData:PageEvent){
     this.currentPage = pageData.pageIndex+1;
     this.allTvShowsServ.getAllTv( this.currentPage,this.currentLang).subscribe({
      next:(res) =>{
          this.allTvs = res.results
          this.allData = this.allTvs
      }
     })
  }

  }


