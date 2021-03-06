import { DetailUserComponent } from './components/user/detail-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: 'new', component: NewUserComponent },
      { path: 'edit', component: EditUserComponent},
      { path: 'detail', component: DetailUserComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'new'}    
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
