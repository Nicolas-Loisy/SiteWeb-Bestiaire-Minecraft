import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  texteAnimaux : string = "Animaux"
  textePnj : string = "Pnj"
  texteMobs : string = "Mobs"

  @Output() typeEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    this.title = 'Bestiaire Minecraft';
  }

  onAnimaux(){
    if(this.texteAnimaux == "Animaux"){
      this.texteAnimaux = "Tout";
      this.textePnj = "Pnj";
      this.texteMobs = "Mobs";
      this.typeEvent.emit("animal");
    }
    else{
      this.texteAnimaux = "Animaux";
      this.typeEvent.emit("tout");
    }
  }

  onPnj(){   
    if(this.textePnj == "Pnj"){
      this.textePnj = "Tout";
      this.texteAnimaux = "Animaux";
      this.texteMobs = "Mobs";
      this.typeEvent.emit("pnj");
    }
    else{
      this.textePnj = "Pnj";
      this.typeEvent.emit("tout");
    }
  }

  onMobs(){
    if(this.texteMobs == "Mobs"){
      this.texteMobs = "Tout";
      this.texteAnimaux = "Animaux";
      this.textePnj = "Pnj";
      this.typeEvent.emit("mob");
    }
    else{
      this.texteMobs = "Mobs";
      this.typeEvent.emit("tout");
    }
  }

}
