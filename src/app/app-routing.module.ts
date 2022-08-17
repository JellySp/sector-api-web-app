import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {UserDataComponent} from "./components/user-data/user-data.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'users/edit', component: UserDataComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
