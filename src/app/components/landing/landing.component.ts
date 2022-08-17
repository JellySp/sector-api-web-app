import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SectorApiService} from "../../services/sector-api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private sectorApiService: SectorApiService,
              private router: Router) {
  }

  userName = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'Please enter your username!'
    }
    return this.userName.hasError('userNotFound') ? 'User not found' : '';
  }

  validateUserExists() {
    this.sectorApiService.doesUserExist(this.userName.value).subscribe(
      response => {
        if (!response) {
          this.userName.setErrors({'userNotFound': true})
        }
      }
    )
  }

  onSubmit() {
    this.router.navigate(['/users/edit'],
      {queryParams: {userName: this.userName.value}})
  }
}
