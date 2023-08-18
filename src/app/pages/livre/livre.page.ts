import { Component, OnInit } from '@angular/core';
import {Livre} from "../../Model/Livre/livre";
import {Router} from "@angular/router";
import {LivreService} from "../../Services/Livre/livre.service";
import {Exposant} from "../../Model/Exposant/exposant";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {

  livres: Array<Livre> = [] ;
  public keyword : string="";
  constructor(private router:Router,private livreService:LivreService,private navCtrl: NavController) {
  }
  ngOnInit(): void {
    this.getLivres();
  }

  goToLivreDetails(livre: Livre) {
    this.navCtrl.navigateForward(['/livre-details', livre.livreId]);
  }

  getLivres() {
    this.livreService.getLivres()
      .subscribe({
          next :  data => {
            console.log(data);
            this.livres = data;
          },
          error: err => {
            console.log(err);
          }
        }
      )
  }

  searchLivre() {
    this.livreService.searchLivre(this.keyword).subscribe({
      next:value => {
        console.log(value);
        this.livres=value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}


