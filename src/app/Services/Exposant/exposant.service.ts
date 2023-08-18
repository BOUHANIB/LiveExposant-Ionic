import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exposant} from "../../Model/Exposant/exposant";

@Injectable({
  providedIn: 'root'
})
export class ExposantService {

  constructor(private httpClient: HttpClient) {
  }

  public getExposants(): Observable<Array<Exposant>> {
    return this.httpClient.get<Array<Exposant>>("http://localhost:8080/exposant/getAll")
  }

  public searchExposant(keyword: string): Observable<Array<Exposant>> {
    return this.httpClient.get<Array<Exposant>>(`http://localhost:8080/exposant/search?keyword=${keyword}`)
  }

  getExposantById(exposantId: number):Observable<Exposant> {
    return this.httpClient.get<Exposant>(`http://localhost:8080/exposant/getByid/${exposantId}`);
  }

}
