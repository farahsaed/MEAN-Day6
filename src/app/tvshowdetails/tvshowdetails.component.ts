import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tvshowdetails',
  templateUrl: './tvshowdetails.component.html',
  styleUrls: ['./tvshowdetails.component.css']
})
export class TvshowdetailsComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allTvs:any[] =[]
  allData:any[] =[]
  selectedTV:any;
  
  constructor(private route:ActivatedRoute , private tvShowServ:TvService) {}
  
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(id);
     this.tvShowServ.getTvById(id).subscribe({
      next:(res) => {
         this.selectedTV = res
      }
     })
  }
}
