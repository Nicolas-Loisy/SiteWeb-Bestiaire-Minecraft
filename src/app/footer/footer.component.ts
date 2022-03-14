import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title! : string;
  annee! : string;

  constructor() { }

  ngOnInit(){    
    this.title = 'Bestiaire Minecraft';
    this.annee = '2022';
  }

}
