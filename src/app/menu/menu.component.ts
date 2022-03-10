import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title! : string;
  logo : string = "assets/img/logo.gif";

  test1:number = 0;
  test2:number = 0;
  test3:number = 0;

  constructor() { }

  ngOnInit() {
    this.title = 'Bestiaire Minecraft';
  }

  onMCompanies(){
    this.test1++;
  }

  onPnj(){
    this.test2++;
  }

  onMHostiles(){
    this.test3++;
  }

}
