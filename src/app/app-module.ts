import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthorIndex } from './components/author-index/author-index';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorCreate } from './components/author-create/author-create';
import { AuthorEdit } from './components/author-edit/author-edit';
import { SyncGridModule } from './sync-grid/sync-grid-module';

import { LoginPage } from './components/login-page/login-page';
import { RegisterPage } from './components/register-page/register-page';


@NgModule({
  declarations: [
    App,
    AuthorIndex,
    AuthorCreate,
    AuthorEdit,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    SyncGridModule
    
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
