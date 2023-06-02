import { IProperty } from './../IProperty.interface';
import { HousingService } from './../../_services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private housuingService : HousingService ) { }

  properties : Array<IProperty>;

  SellRent = 1 ;

  ngOnInit() : void {
    if(this.activatedRoute.snapshot.url.toString()){ //this.activatedRoute.snapshot.url.toString() == rent-property
      this.SellRent = 2 ;
    }

    this.housuingService.getAllProperties(this.SellRent).subscribe(
      data=>{
      this.properties = data;
      //console.log(data);
      //console.log(this.activatedRoute.snapshot.url.toString());  //y3ni el url feh value
      //console.log(this.SellRent)
      },error => {
        console.log('httperror');
        console.log(error);
      }
    );
  }

}
