import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'search/results',
    component: SearchResultsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
