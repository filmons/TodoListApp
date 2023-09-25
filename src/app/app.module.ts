import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    // TaskListComponent,
    TaskComponent,
    LoginComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
