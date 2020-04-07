import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyword: string = "";

  brews: Object;

  constructor(private _http : ListService) { }

  ngOnInit() {
  }

  onKey(event: any){
    console.log("[SearchComppnent-onKey]")
    this._http.getSearchResults(this.keyword).subscribe(data=>{
      this.brews = data;
      console.log(this.brews)
    });
  }

}
