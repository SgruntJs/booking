import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  
  {
    path:'',
    component: HomeComponent,
  },
  {
    path: 'searchresults',
    loadChildren: () => import("./pages/searchresults/searchresults.module").then( _=> _.SearchresultsModule)
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
