import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Component Pages
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboardmodules/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';


//Materials
import { SharedModule } from 'src/app/shared/shared.module';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatListModule } from '@angular/material/list';
// import { LayoutModule } from '@angular/cdk/layout';
import { DefaultModule } from './layout/default/default.module';
import { MonitorComponent } from './modules/monitor/monitor.component';
import { CreateComponent } from './modules/create/create.component';
import { EventsComponent } from './modules/events/events.component';
import { LoadingComponent } from './components/loading/loading.component';
// import { MatCardModule } from '@angular/material';

//Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCjTgR6zU3KBSDNi5jt14qwCv4jC66itpU",
  authDomain: "scanin-8eaa5.firebaseapp.com",
  databaseURL: "https://scanin-8eaa5.firebaseio.com",
  projectId: "scanin-8eaa5",
  storageBucket: "scanin-8eaa5.appspot.com",
  messagingSenderId: "485353517142",
  appId: "1:485353517142:web:552ac9a3cb0907eb12cbf7",
  measurementId: "G-PWWMQ1PS06"
};

@NgModule({
  declarations: [
    AppComponent,

    // DashboardComponent,
    SignupComponent,
    LoginComponent,
    EmailComponent,
    HomeComponent,
    CreateComponent,
    MonitorComponent,
    EventsComponent,
    LoadingComponent,
  ],
  imports: [
    DefaultModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),

    //Materials
    SharedModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,
    // ReactiveFormsModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatToolbarModule,
    // MatListModule,
    // MatCardModule,
    // LayoutModule

  ],
  providers: [

  ],
  exports: [
    DefaultModule,
    SharedModule
  ],
  entryComponents: [
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
