import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SectorApiService} from "../../services/sector-api.service";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  username: string
  user: User
  sectors: Sector[]

  constructor(private sectorApiService: SectorApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.username = params['username']
      }
    )
    this.getSectors()
    this.getUser()
  }

  onSubmit() {
    console.log('USER_SANITY')
    console.log(this.user)
    console.log('SECTORS_SANITY')
    console.log(this.sectors)
    console.log('USER_SECTORS_SANITY')
    console.log(this.user.sectors)
  }

  getSectors(): void {
    this.sectorApiService.getSectors().subscribe(
      response => {
        this.sectors = response
      }
    )
  }

  getUser(): void {
    this.sectorApiService.getUserByUserName(this.username).subscribe(
      response => {
        this.user = response
      }
    )
  }
}

export class Sector {
  constructor(
    public id: number,
    public parentId: number,
    public name: string
  ) {
  }
}

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public userName: string,
    public agreedToTerms: boolean,
    public sectors: Sector[],
  ) {
  }
}
