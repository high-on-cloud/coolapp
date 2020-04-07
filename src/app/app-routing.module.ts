import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SearchdetailsComponent } from './searchdetails/searchdetails.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list', component: ListComponent},
  {path: 'search', component: SearchComponent},
  {path: 'searchdetails/:name', component: SearchdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
