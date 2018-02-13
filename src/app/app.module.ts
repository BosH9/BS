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
<<<<<<< HEAD
import { ChooseBikePage } from '../pages/choose-bike/choose-bike';
=======
import { SelectBikePage } from '../pages/select-bike/select-bike';
>>>>>>> 653157a1b47997d4a957341a8bf12472dad6c4bf

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Ionic2RatingModule } from 'ionic2-rating';
import { AddBikeDetailsPage } from '../pages/add-bike-details/add-bike-details';
import { ChooseYourBikePage } from '../pages/choose-your-bike/choose-your-bike';
import { MyBikesPage } from '../pages/my-bikes/my-bikes';
import { BookingsPage } from '../pages/bookings/bookings';
import { InvoicePage } from '../pages/invoice/invoice';


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
<<<<<<< HEAD
    ChooseBikePage
=======
    SelectBikePage,
    AddBikeDetailsPage,
    ChooseYourBikePage,
    MyBikesPage,
    BookingsPage,
    InvoicePage
>>>>>>> 653157a1b47997d4a957341a8bf12472dad6c4bf
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
<<<<<<< HEAD
    ChooseBikePage
=======
    SelectBikePage,
    AddBikeDetailsPage,
    ChooseYourBikePage,
    MyBikesPage,
    BookingsPage,
    InvoicePage
>>>>>>> 653157a1b47997d4a957341a8bf12472dad6c4bf
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
  ]
})
export class AppModule {}
