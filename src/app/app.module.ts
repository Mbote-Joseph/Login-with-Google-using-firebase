import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';

const config = {/* your firebase web config */
  apiKey: "AIzaSyDnJ1J3qIp6btE-tr6-yaV58MjONUjDcg4",
    authDomain: "authentication2-2fe05.firebaseapp.com",
    databaseURL: "https://authentication2-2fe05.firebaseio.com",
    projectId: "authentication2-2fe05",
    storageBucket: "authentication2-2fe05.appspot.com",
    messagingSenderId: "508019742280",
    appId: "1:508019742280:web:f0b9796196f2631f20aa7d",
    measurementId: "G-7N8M7C2ZC3"
  
}

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
