import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { AudioComponent } from './audio/audio.component';
import { AboutComponent } from './about/about.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { LaptopsComponent } from './Laptops/Laptops.component';
import { GamingComponent } from './Gaming/Gaming.component';
import { ProductPageComponent } from './productPage/productPage.component';
import { MobileproductComponent } from './mobileproduct/mobileproduct.component';
import { PurchaseComponent } from './Purchase/Purchase.component';
import { AudioProductsComponent } from './audioProducts/audioProducts.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { UserPageComponent } from './userPage/userPage.component';
import { CartComponent } from './cart/cart.component';
import { ResetPassComponent } from './resetPass/resetPass.component';
import { RegisterGuard } from './register.guard';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"mobile",
    component:MobileComponent
  },
  {
    path:"admin",
    component:AdminPageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent,
    canDeactivate:[RegisterGuard]
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"audio",
    component:AudioComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"peripheral",
    component:PeripheralsComponent
  },
  {
    path:"laptop",
    component:LaptopsComponent
  },
  {
    path:"gaming",
    component:GamingComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"resetpass",
    component:ResetPassComponent
  },
  {
    path:"productPage/:check",
    component:ProductPageComponent
  },
  {
    path:"mobileProduct/:check",
    component:MobileproductComponent
  },
  {
    path:"audioProduct/:check",
    component:AudioProductsComponent
  },
  {
    path:"purchase",
    component:PurchaseComponent
  },
  {
    path:"userPage",
    component:UserPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule { }
