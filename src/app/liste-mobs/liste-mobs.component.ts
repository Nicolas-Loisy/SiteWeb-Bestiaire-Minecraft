import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input , OnChanges } from '@angular/core';
import { MobCard } from '../models/mob-card.model';

@Component({
  selector: 'app-liste-mobs',
  templateUrl: './liste-mobs.component.html',
  styleUrls: ['./liste-mobs.component.scss']
})
export class ListeMobsComponent implements OnInit {

  myMobCards!: MobCard[];
  allMyMobCards!: MobCard[];
  
  @Input() typeAAfficher : string = "tout";

  titre : string = ""

  imgHautDePage : string = "assets/img/scrollToTop1.png";


  constructor(private scroller : ViewportScroller) { }

  changerAffichage(){
    if(this.typeAAfficher == "tout"){
      this.titre="";
      this.myMobCards = this.allMyMobCards;
    }
    else{
      if(this.typeAAfficher == "animal"){
        this.titre="Liste des animaux";

      }
      if(this.typeAAfficher == "pnj"){
        this.titre="Liste des PNJs";
      }
      if(this.typeAAfficher == "mob"){
        this.titre="Liste des mobs";
      }
      this.myMobCards = [];
      this.allMyMobCards.forEach(x => {if(x.type==this.typeAAfficher){this.myMobCards.push(x)}});
    }
  }

  ngOnChanges(typeAAfficher : string){
    this.changerAffichage();
  }

  scrollToTop() {
    this.scroller.scrollToPosition([0,0]);
  }


  ngOnInit() {
    this.myMobCards = [
      {
        title: "Abeille",
        description: "Les abeilles sont des animaux paissible, non agressif, que l'on trouve naturellement dans les plaines et forêts de fleurs. Les abeilles vivent naturellement dans des nids (ruche) qui se trouvent naturellement dans les arbres de ces biomes. jusqu'à 3 abeilles peuvent habiter dans haque nid. La journée, les abeilles sortent de la ruche pour butiner les fleurs. ",
        image: "assets/img/Bee_types.gif",
        nature: "Neutre",
        type : "animal"
      },
      {
        title: "Ender Dragon",
        description: "L'Ender Dragon est le premier boss ajouté à Minecraft. Il apparait dans le monde The End et est le seul moyen de le quitter. Il se régénère automatiquement grâce aux Ender Crystaux. Lorsqu'on tue un dragon il apporte 12 000 points d'expérience ainsi qu'un portail vers la fin du jeu et son générique de fin. Il n'y a qu'un seul et unique Ender Dragon par partie. Depuis la version 1.9, il est possible de faire réapparaitre l'Ender Dragon.",
        image: "assets/img/"+"Ender_Dragon.gif",
        nature: "Hostile",
        type : "mob"
      },
      {
        title: "Creeper",
        description: "Le creeper est une créature verte, pratiquement silencieuse, insidieuse et kamikaze. Une fois qu'il s'est assez rapproché du joueur, le creeper laissera échapper un sifflement sonore et explosera après 1 à 2 secondes. Les creepers sont silencieux quand ils ne bougent pas et ne prennent pas feu quand ils sont exposés à la lumière du soleil, contrairement aux zombies et aux squelettes. En revanche ils n'apparaissent que dans les endroits sombres (dans les cavernes ou la nuit). Lorsqu'ils sont frappés par la foudre, les creepers se chargent et se transforment alors en Creeper Electrifié.",
        image: "assets/img/"+"Creeper_JE2_BE1.png",
        nature: "Hostile",
        type : "mob"
      }
      ,{
        title: "Abeille",
        description: "Les abeilles sont des animaux paissible, non agressif, que l'on trouve naturellement dans les plaines et forêts de fleurs. Les abeilles vivent naturellement dans des nids (ruche) qui se trouvent naturellement dans les arbres de ces biomes. jusqu'à 3 abeilles peuvent habiter dans haque nid. La journée, les abeilles sortent de la ruche pour butiner les fleurs. ",
        image: "assets/img/Bee_types.gif",
        nature: "Neutre",
        type : "animal"
      },
      {
        title: "Ender Dragon",
        description: "L'Ender Dragon est le premier boss ajouté à Minecraft. Il apparait dans le monde The End et est le seul moyen de le quitter. Il se régénère automatiquement grâce aux Ender Crystaux. Lorsqu'on tue un dragon il apporte 12 000 points d'expérience ainsi qu'un portail vers la fin du jeu et son générique de fin. Il n'y a qu'un seul et unique Ender Dragon par partie. Depuis la version 1.9, il est possible de faire réapparaitre l'Ender Dragon.",
        image: "assets/img/"+"Ender_Dragon.gif",
        nature: "Hostile",
        type : "mob"
      },
      {
        title: "Abeille",
        description: "Les abeilles sont des animaux paissible, non agressif, que l'on trouve naturellement dans les plaines et forêts de fleurs. Les abeilles vivent naturellement dans des nids (ruche) qui se trouvent naturellement dans les arbres de ces biomes. jusqu'à 3 abeilles peuvent habiter dans haque nid. La journée, les abeilles sortent de la ruche pour butiner les fleurs. ",
        image: "assets/img/Bee_types.gif",
        nature: "Neutre",
        type : "animal"
      },
      {
        title: "Ender Dragon",
        description: "L'Ender Dragon est le premier boss ajouté à Minecraft. Il apparait dans le monde The End et est le seul moyen de le quitter. Il se régénère automatiquement grâce aux Ender Crystaux. Lorsqu'on tue un dragon il apporte 12 000 points d'expérience ainsi qu'un portail vers la fin du jeu et son générique de fin. Il n'y a qu'un seul et unique Ender Dragon par partie. Depuis la version 1.9, il est possible de faire réapparaitre l'Ender Dragon.",
        image: "assets/img/"+"Ender_Dragon.gif",
        nature: "Hostile",
        type : "mob"
      },
      {
        title: "Abeille",
        description: "Les abeilles sont des animaux paissible, non agressif, que l'on trouve naturellement dans les plaines et forêts de fleurs. Les abeilles vivent naturellement dans des nids (ruche) qui se trouvent naturellement dans les arbres de ces biomes. jusqu'à 3 abeilles peuvent habiter dans haque nid. La journée, les abeilles sortent de la ruche pour butiner les fleurs. ",
        image: "assets/img/Bee_types.gif",
        nature: "Neutre",
        type : "animal"
      },
      {
        title: "Ender Dragon",
        description: "L'Ender Dragon est le premier boss ajouté à Minecraft. Il apparait dans le monde The End et est le seul moyen de le quitter. Il se régénère automatiquement grâce aux Ender Crystaux. Lorsqu'on tue un dragon il apporte 12 000 points d'expérience ainsi qu'un portail vers la fin du jeu et son générique de fin. Il n'y a qu'un seul et unique Ender Dragon par partie. Depuis la version 1.9, il est possible de faire réapparaitre l'Ender Dragon.",
        image: "assets/img/"+"Ender_Dragon.gif",
        nature: "Hostile",
        type : "mob"
      },
      {
        title: "Abeille",
        description: "Les abeilles sont des animaux paissible, non agressif, que l'on trouve naturellement dans les plaines et forêts de fleurs. Les abeilles vivent naturellement dans des nids (ruche) qui se trouvent naturellement dans les arbres de ces biomes. jusqu'à 3 abeilles peuvent habiter dans haque nid. La journée, les abeilles sortent de la ruche pour butiner les fleurs. ",
        image: "assets/img/Bee_types.gif",
        nature: "Neutre",
        type : "animal"
      },
      {
        title: "Ender Dragon",
        description: "L'Ender Dragon est le premier boss ajouté à Minecraft. Il apparait dans le monde The End et est le seul moyen de le quitter. Il se régénère automatiquement grâce aux Ender Crystaux. Lorsqu'on tue un dragon il apporte 12 000 points d'expérience ainsi qu'un portail vers la fin du jeu et son générique de fin. Il n'y a qu'un seul et unique Ender Dragon par partie. Depuis la version 1.9, il est possible de faire réapparaitre l'Ender Dragon.",
        image: "assets/img/"+"Ender_Dragon.gif",
        nature: "Hostile",
        type : "mob"
      }
    ];

    this.allMyMobCards = this.myMobCards;

/*
    this.myMobCard1 = new MobCard("Abeille",
                                "Les abeilles sont des animaux paissible, non agressif, que l'on trouve naturellement dans les plaines et forêts de fleurs. Les abeilles vivent naturellement dans des nids (ruche) qui se trouvent naturellement dans les arbres de ces biomes. jusqu'à 3 abeilles peuvent habiter dans haque nid. La journée, les abeilles sortent de la ruche pour butiner les fleurs. ",
                                "assets/img/"+"Bee_types.gif",
                                "Neutre");
                              
    this.myMobCard2 = new MobCard("Ender Dragon",
                                "L'Ender Dragon est le premier boss ajouté à Minecraft. Il apparait dans le monde The End et est le seul moyen de le quitter. Il se régénère automatiquement grâce aux Ender Crystaux. Lorsqu'on tue un dragon il apporte 12 000 points d'expérience ainsi qu'un portail vers la fin du jeu et son générique de fin. Il n'y a qu'un seul et unique Ender Dragon par partie. Depuis la version 1.9, il est possible de faire réapparaitre l'Ender Dragon.",
                                "assets/img/"+"Ender_Dragon.gif",
                                "Hostile");
                              
    this.myMobCard3 = new MobCard("Creeper",
                                "Le creeper est une créature verte, pratiquement silencieuse, insidieuse et kamikaze. Une fois qu'il s'est assez rapproché du joueur, le creeper laissera échapper un sifflement sonore et explosera après 1 à 2 secondes. Les creepers sont silencieux quand ils ne bougent pas et ne prennent pas feu quand ils sont exposés à la lumière du soleil, contrairement aux zombies et aux squelettes. En revanche ils n'apparaissent que dans les endroits sombres (dans les cavernes ou la nuit). Lorsqu'ils sont frappés par la foudre, les creepers se chargent et se transforment alors en Creeper Electrifié. Lorsqu'un creeper est tué par un squelette, il peut dropper des disques. Lorsqu'il est tué par un Creeper Electrifié, il drop une tête de creeper.",
                                "assets/img/"+"Creeper_JE2_BE1.png",
                                "Hostile");
*/
  }

}
