import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Livre} from "../../Model/Livre/livre";

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private httpClient: HttpClient) {
  }

  public getLivres(): Observable<Array<Livre>> {
    return this.httpClient.get<Array<Livre>>("http://localhost:8080/livre/view")
  }


  public searchLivre(keyword: string): Observable<Array<Livre>> {
    return this.httpClient.get<Array<Livre>>(`http://localhost:8080/livre/search?keyword=${keyword}`);
  }

  getLivreById(livreId: number):Observable<Livre> {
    return this.httpClient.get<Livre>(`http://localhost:8080/livre/view/${livreId}`);
  }


}
