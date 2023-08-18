import { Component, OnInit } from '@angular/core';
import {Exposant} from "../../Model/Exposant/exposant";
import {ExposantService} from "../../Services/Exposant/exposant.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-exposant',
  templateUrl: './exposant.page.html',
  styleUrls: ['./exposant.page.scss'],
})
export class ExposantPage implements OnInit {
  exposants: Array<Exposant> = [] ;
  public keyword : string="";

  constructor(private exposantService:ExposantService ,
              private navCtrl: NavController) {
  }

  goToExposantDetails(exposant: Exposant) {
    this.navCtrl.navigateForward(['/exposant-details', exposant.exposantId]);
  }

  ngOnInit(): void {
    this.getExposants();
  }

  getExposants() {

    this.exposantService.getExposants()
      .subscribe({
          next :  data => {
            console.log(data);
            this.exposants = data;
          },
          error: err => {
            console.log(err);
          }
        }
      )
  }
  searchExposant() {
    this.exposantService.searchExposant(this.keyword).subscribe({
      next:value => {
        console.log(value);
        this.exposants=value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}

