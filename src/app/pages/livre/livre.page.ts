import { Component, OnInit } from '@angular/core';
import {Livre} from "../../Model/Livre/livre";
import {Router} from "@angular/router";
import {LivreService} from "../../Services/Livre/livre.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {

  livres: Array<Livre> = [] ;
  public keyword : string="";
  searchTimeout: any;

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
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      if (this.keyword.trim() === "") {
        this.getLivres();
      } else {
        this.livreService.searchLivre(this.keyword).subscribe({
          next: (value) => {
            this.livres = value;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    }, 300); // Temporisation de 300 ms avant la recherche
  }

}


