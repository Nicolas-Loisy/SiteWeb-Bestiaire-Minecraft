import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-card',
  templateUrl: './mob-card.component.html',
  styleUrls: ['./mob-card.component.scss']
})
export class MobCardComponent implements OnInit {
  title! : string;
  description! : string;
  image! : string;
  nature! : string;

  ngOnInit() {
    this.title = "creeper";
    this.description = "la description";
    this.image = "url image";
    this.nature = "neutre";
  }

}
