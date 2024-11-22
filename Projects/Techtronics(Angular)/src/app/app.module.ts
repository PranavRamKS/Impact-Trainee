import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AudioComponent } from './audio/audio.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { LaptopsComponent } from './Laptops/Laptops.component';
import { GamingComponent } from './Gaming/Gaming.component';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './productPage/productPage.component';
import { MobileproductComponent } from './mobileproduct/mobileproduct.component';
import { AudioProductsComponent } from './audioProducts/audioProducts.component';
import { PurchaseComponent } from './Purchase/Purchase.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { UserPageComponent } from './userPage/userPage.component';
import { ResetPassComponent } from './resetPass/resetPass.component';
import { PriceDiscountPipe } from 'src/priceDiscount.pipe';




@NgModule({
  declarations: [																								
    AppComponent,
      MenubarComponent,
      HeaderComponent,
      HomeComponent,
      MobileComponent,
      LoginComponent,
      AboutComponent,
      FooterComponent,
      RegisterComponent,
      AudioComponent,
      PeripheralsComponent,
      LaptopsComponent,
      GamingComponent,
      CartComponent,
      ProductPageComponent,
      MobileproductComponent,
      AudioProductsComponent,
      PurchaseComponent,
      AdminPageComponent,
      UserPageComponent,
      ResetPassComponent,
      PriceDiscountPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
