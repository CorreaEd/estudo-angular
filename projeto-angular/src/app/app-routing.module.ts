import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { 
    path: 'home',
    loadChildren:() => import("./home/home.module").then(module => module.HomeModule)
  },
  { 
    path: 'user',
    loadChildren:() => import("./user/user.module").then(module => module.UserModule)
  },
  {
    path: 'states',
    loadChildren:() => import("./states/states.module").then(module => module.StatesModule)
  },
  { 
    path: '',
    pathMatch: 'full',
    redirectTo:'/home'
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
