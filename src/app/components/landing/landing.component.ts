import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SectorApiService} from "../../services/sector-api.service";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private sectorApiService: SectorApiService) {
  }

  username = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Please enter your username!'
    }
    return this.username.hasError('userNotFound') ? 'User not found' : '';
  }

  validateUserExists() {
    this.sectorApiService.doesUserExist(this.username.value).subscribe(
      response => {
        if (!response) {
          this.username.setErrors({'userNotFound': true})
        }
      }
    )
  }
}
