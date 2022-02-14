import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { RulesComponent } from './components/rules/rules.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhitelistComponent } from './components/whitelist/whitelist.component';
import { SinglenewsComponent } from './components/singlenews/singlenews.component';
import { ServerstatComponent } from './components/serverstat/serverstat.component';
import { ResultComponent } from './components/result/result.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import { PrivacyComponent } from './components/privacy/privacy.component';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";
import { ManagenewsComponent } from './components/managenews/managenews.component';
import { ManagewhitelistComponent } from './components/managewhitelist/managewhitelist.component';
import { ViewComponent } from './components/view/view.component';
import { ManageaccountsComponent } from './components/manageaccounts/manageaccounts.component';
import { DevtagComponent } from './components/devtag/devtag.component';
import { StatusComponent } from './components/status/status.component';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1069794224081-58ro1h109l4efph88j4nipjgfcid3a20.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    RulesComponent,
    ProfileComponent,
    FooterComponent,
    WhitelistComponent,
    SinglenewsComponent,
    ServerstatComponent,
    ResultComponent,
    LoginComponent,
    PrivacyComponent,
    ManagenewsComponent,
    ManagewhitelistComponent,
    ViewComponent,
    ManageaccountsComponent,
    DevtagComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
