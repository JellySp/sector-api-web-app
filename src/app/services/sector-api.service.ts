import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class SectorApiService {

  constructor(private httpClient: HttpClient) {
  }

  doesUserExist(username: string | null): Observable<boolean> {
    return this.httpClient.get<boolean>(API_URL + `/users/exists?userName=${username}`)
  }
}
