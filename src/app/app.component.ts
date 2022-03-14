import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  type : string = "tout"

  recevoirType($event: string){
    this.type = $event
  }

}
