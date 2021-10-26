import { SearchPageComponent } from './search-page/search-page.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'landing', component: LandingComponent },
  {
    path: '', component: LandingComponent
  },
  { path: 'search', component: SearchPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
