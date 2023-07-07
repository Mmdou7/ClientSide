import { Injectable } from '@angular/core';
import * as alertfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
success(msg:string){
alertfy.success(msg);
}

error(msg:string){
alertfy.error(msg);
}

warning(msg:string){
alertfy.warning(msg);
}

}
