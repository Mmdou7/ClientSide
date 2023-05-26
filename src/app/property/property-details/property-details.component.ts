import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  public propertyId : number;
  constructor(private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.propertyId = Number(this.activatedRoute.snapshot.params['id']) //nfs case sensitive of routing
    
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.propertyId = Number(params['id'])
      }
    )
    
  }
  nextProperty(){
    this.propertyId++
    this.router.navigate(['property-Details',this.propertyId]);
  }

}
