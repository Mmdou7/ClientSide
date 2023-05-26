import { IProperty } from './../property/IProperty.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(public http : HttpClient) { }

  getAllProperties(sellRent:number): Observable<IProperty[]> {
    return this.http.get('_data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty>=[];

        for (const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === sellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
