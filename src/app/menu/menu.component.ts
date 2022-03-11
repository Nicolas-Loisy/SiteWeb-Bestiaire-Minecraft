import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title! : string;
  logo : string = "assets/img/logo.gif";
  vache : string = "assets/img/vache.png"
  pnj : string = "assets/img/pnj.png"
  creeper : string = "assets/img/creeper.png"

  test1:number = 0;
  test2:number = 0;
  test3:number = 0;

  constructor() { }

  ngOnInit() {
    this.title = 'Bestiaire Minecraft';
  }

  onAnimaux(){
    this.test1++;
  }

  onPnj(){
    this.test2++;
  }

  onMobs(){
    this.test3++;
  }

}
