import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.component.html',
  styleUrls: ['./searchdetails.component.scss']
})
export class SearchdetailsComponent implements OnInit {

  brewDetails: Object;
  
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private http: ListService) { }

  ngOnInit() {
    const _name = this.activatedRouter.snapshot.paramMap.get('name')
    this.getBrewDetails(_name);
  }

  public getBrewDetails(name : string){
    this.http.getBrewDetails(name).subscribe(data =>{
      this.brewDetails = data;
      console.log(data)
    })
  }

}
