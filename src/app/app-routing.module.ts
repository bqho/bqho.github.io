import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { publicationsComponent } from './publications/publication.component';
import { cellsystemsComponent } from './cellsystems-data/cellsystems.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'publications', component: publicationsComponent },
  { path: 'cellsystems', component: cellsystemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
