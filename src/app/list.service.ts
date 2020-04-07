import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }
  
 getBreweries(){
   return this.http.get('https://api.openbrewerydb.org/breweries');
 }

 getSearchResults(query: string){
   return this.http.get("https://api.openbrewerydb.org/breweries/autocomplete?query="+query);
 }

 getBrewDetails(name: string){
   return this.http.get("https://api.openbrewerydb.org/breweries/search?query="+name);
 }

}
