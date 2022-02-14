import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewsComponent} from "./components/news/news.component";
import {WhitelistComponent} from "./components/whitelist/whitelist.component";
import {SinglenewsComponent} from "./components/singlenews/singlenews.component";
import {ResultComponent} from "./components/result/result.component";
import {PrivacyComponent} from "./components/privacy/privacy.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileGuard} from "./guard/profile.guard";
import {ManagenewsComponent} from "./components/managenews/managenews.component";
import {ManagewhitelistComponent} from "./components/managewhitelist/managewhitelist.component";
import {ViewComponent} from "./components/view/view.component";
import {ManageaccountsComponent} from "./components/manageaccounts/manageaccounts.component";
import {RulesComponent} from "./components/rules/rules.component";
import {DevtagComponent} from "./components/devtag/devtag.component";
import {StatusComponent} from "./components/status/status.component";

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'news', component:NewsComponent
  },
  {
    path:'whitelist', component:WhitelistComponent
  },
  {
    path:'news/:id', component:SinglenewsComponent
  },
  {
    path:'whitelist/result', component: ResultComponent
  },
  {
    path:'privacy', component: PrivacyComponent
  },
  {
    path:'login', component:LoginComponent
  } ,
  {
    path:'profile', component:ProfileComponent, canActivate:[ProfileGuard]
  },
  {
    path:'profile/managenews', component:ManagenewsComponent, canActivate:[ProfileGuard]
  },
  {
    path:'profile/managewhitelist', component:ManagewhitelistComponent, canActivate:[ProfileGuard]
  },
  {
    path:'profile/managewhitelist/view/:id', component:ViewComponent, canActivate:[ProfileGuard]
  },
  {
    path:'profile/manageaccounts', component:ManageaccountsComponent, canActivate:[ProfileGuard]
  },
  {
    path:'rules', component:RulesComponent
  },
  {
    path:'devtag', component:DevtagComponent
  },
  {
    path:'status', component:StatusComponent
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
