import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorIndex } from './components/author-index/author-index';
import { AuthorCreate } from './components/author-create/author-create';
import { AuthorEdit } from './components/author-edit/author-edit';
import { AppGuard } from './app-guard';
import { LoginPage } from './components/login-page/login-page';
import { RegisterPage } from './components/register-page/register-page';

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: AuthorIndex },
  { path: "create", component: AuthorCreate, canActivate: [AppGuard] },
  { path: "edit/:id", component: AuthorEdit, canActivate: [AppGuard] },
  { path: "login", component: LoginPage },
  { path: "register", component: RegisterPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
