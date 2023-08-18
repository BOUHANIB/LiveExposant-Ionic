import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExposantService} from "../../Services/Exposant/exposant.service";
import {LivreService} from "../../Services/Livre/livre.service";

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.page.html',
  styleUrls: ['./livre-details.page.scss'],
})
export class LivreDetailsPage implements OnInit {
  livre: any ;

  constructor(private route: ActivatedRoute, private livreService: LivreService) {}

  ngOnInit() {
    const livreId = this.route.snapshot.paramMap.get('id');
    if (livreId) {
      const idAsNumber = parseInt(livreId, 10);
      this.livreService.getLivreById(idAsNumber).subscribe((livre) => {
        this.livre = livre;
      });
    }
  }
}
