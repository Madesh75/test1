import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [  
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'user-list', component: UserListComponent },
{ path: 'edit-user/:id', component: EditUserComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
