import { Component, OnInit, Input } from '@angular/core';
import { MobCard } from '../models/mob-card.model';

@Component({
  selector: 'app-mob-card',
  templateUrl: './mob-card.component.html',
  styleUrls: ['./mob-card.component.scss']
})
export class MobCardComponent implements OnInit {
  @Input() mobCard!: MobCard;

  title! : string;
  description! : string;
  image! : string;
  nature! : string;
  type! : string;

  ngOnInit() {
    this.title = "Creeper";
    this.description = "Les vaches sont des créatures passives. Elles fournissent du cuir qui peut être utilisé pour créer des vêtements, de la viande de boeuf et du lait ce dernier servant de contrepoison ou encore dans la fabrication de gâteaux. Si la vache meurt en brulant, sa viande sera cuite. Pour récupérer son lait, il suffit de faire un clic droit sur la vache avec un seau vide dans la main. Les vaches apparaissent en groupe de 4 à 12 bêtes et se promènent sans véritable but. Il y a différents type de vaches bien que leur apparence globale reste la même. Les vaches peuvent également apparaittre après avoir tondu une vachampignon à l'aide de ciseaux.";
    this.image = "assets/img/"+"Bee_types.gif";
    this.nature = "neutre";
    this.type = "mob";
  }

}
