import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { RegisterUserComponent } from './register/register-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
