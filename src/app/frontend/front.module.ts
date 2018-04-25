// Angular module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// App component
import { FrontComponent } from './front.component';

// Providers

// Routing
import { FrontRouting } from './front.routes';

// Pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    FrontComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FrontRouting,

  ],
  providers: [],
  bootstrap: [FrontComponent]
})
export class AppModule { }
