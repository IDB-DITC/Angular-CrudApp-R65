import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthorIndex } from './components/author-index/author-index';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AuthorCreate } from './components/author-create/author-create';
import { AuthorEdit } from './components/author-edit/author-edit';
import { SyncGridModule } from './sync-grid/sync-grid-module';

import { LoginPage } from './components/login-page/login-page';
import { RegisterPage } from './components/register-page/register-page';
import { TokenInterceptor } from './services/token-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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

    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    SyncGridModule,
    


    
  ],
  providers: [   
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
