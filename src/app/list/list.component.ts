import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews : Object;

  constructor(private _http: ListService) { }

  ngOnInit() {
    this._http.getBreweries().subscribe(data=>{
      this.brews = data;
      console.log(this.brews)
    });
  }

}
