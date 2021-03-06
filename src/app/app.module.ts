import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { FavoritesPage } from '../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';
import { HttpClientModule } from '@angular/common/http';
import { CampaignCardComponent } from '../components/campaign-card/campaign-card';
import { ProgressComponent } from '../components/progress/progress';
import { CampaignDetailsPage } from '../pages/campaign-details/campaign-details';
import { SwishProvider } from '../providers/swish/swish';
import { Device } from '@ionic-native/device';
import { DonationsProvider } from '../providers/donations/donations';

const firebase = {
    apiKey: "AIzaSyANKE5pJbthY5wzPAFwg2qx0RdMj86OuMM",
    authDomain: "altru-app.firebaseapp.com",
    databaseURL: "https://altru-app.firebaseio.com",
    projectId: "altru-app",
    storageBucket: "altru-app.appspot.com",
    messagingSenderId: "787317789913"
}

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    ProfilePage,
    HomePage,
    TabsPage,
    CampaignCardComponent,
    ProgressComponent,
    CampaignDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    ProfilePage,
    HomePage,
    TabsPage,
    CampaignDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmProvider,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FcmProvider,
    SwishProvider,
    DonationsProvider
  ]
})
export class AppModule {}
