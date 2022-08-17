import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL, SECTORS_FIND_PATH} from "../app.constants";
import {Sector, User} from "../components/user-data/user-data.component";

@Injectable({
  providedIn: 'root'
})
export class SectorApiService {

  constructor(private httpClient: HttpClient) {
  }

  getSectors(): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(API_URL + SECTORS_FIND_PATH)
  }

  doesUserExist(userName: string | null): Observable<boolean> {
    return this.httpClient.get<boolean>(API_URL + `/users/exists?userName=${userName}`)
  }

  getUserByUserName(userName: string): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/users/get?userName=${userName}`)
  }
}
