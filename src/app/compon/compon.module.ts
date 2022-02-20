import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponRoutingModule } from './compon-routing.module';
import { LoginPageComponent } from "./login-page/login-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { environment } from "../../environments/environment";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { AuthService } from "./auth/services/auth.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AuthGuard} from "./auth/services/auth.guard";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ComponRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  providers : [
    AuthService,
    AuthGuard
  ]
})
export class ComponModule { }
