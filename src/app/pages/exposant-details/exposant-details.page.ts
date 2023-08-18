import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExposantService} from "../../Services/Exposant/exposant.service";

@Component({
  selector: 'app-exposant-details',
  templateUrl: './exposant-details.page.html',
  styleUrls: ['./exposant-details.page.scss'],
})
export class ExposantDetailsPage implements OnInit {

  exposant: any ;

  constructor(private route: ActivatedRoute, private exposantService: ExposantService) {}

  ngOnInit() {
    const exposantId = this.route.snapshot.paramMap.get('id');
    if (exposantId) {
      const idAsNumber = parseInt(exposantId, 10);
      this.exposantService.getExposantById(idAsNumber).subscribe((exposant) => {
        this.exposant = exposant;
      });
    }
  }
}
