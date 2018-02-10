import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookPage } from '../pages/book/book';
import { EstimateCostPage, PopoverPage } from '../pages/estimate-cost/estimate-cost';
import { SelectBikePage } from '../pages/select-bike/select-bike';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Ionic2RatingModule } from 'ionic2-rating';
import { AddBikeDetailsPage } from '../pages/add-bike-details/add-bike-details';
import { ChooseYourBikePage } from '../pages/choose-your-bike/choose-your-bike';
import { MyBikesPage } from '../pages/my-bikes/my-bikes';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookPage,
    EstimateCostPage,
    PopoverPage,
    SelectBikePage,
    AddBikeDetailsPage,
    ChooseYourBikePage,
    MyBikesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookPage,
    EstimateCostPage,
    PopoverPage,
    SelectBikePage,
    AddBikeDetailsPage,
    ChooseYourBikePage,
    MyBikesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
  ]
})
export class AppModule {}
