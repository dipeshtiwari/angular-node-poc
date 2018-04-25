// Angular module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
// import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

// Auth Guard
import { AuthGuard } from './_guards/auth.guard';

// App component
import { AppComponent } from './app.component';

// Providers
import { AuthenticationService } from './providers/authentication.service';
import { BlogService } from './providers/blog.service';
import { UsersService } from './providers/users.service';

// Routing
import { Routing } from './app.routes';

// Frontend Layout Component
import { FrontComponent } from './frontend/front.component';
import { HeaderComponent } from './frontend/header/header.component';
import { FooterComponent } from './frontend/footer/footer.component';

// Frontend Pages
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { BlogComponent } from './frontend/blog/blog.component';
import { LoginComponent } from './frontend/login/login.component';
import { RegisterComponent } from './frontend/register/register.component';
import { ContactComponent } from './frontend/contact/contact.component';

// Backend Layout Components
import { BackendComponent } from './backend/backend.component';
import { AdminHeaderComponent } from './backend/header/header.component';
import { AdminSidebarHeaderComponent } from './backend/sidebar/sidebar.component';
import { AdminFooterComponent } from './backend/footer/footer.component';

// Backend Components
import { AdminLoginComponent } from './backend/login/login.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { UserListComponent } from './backend/users/list/userlist.component';
import { UserCreateComponent } from './backend/users/create/usercreate.component';

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyDtvARH-xiZ0w8_o61HXGkMVxzEjw4oB3o',
});

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    BackendComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AdminLoginComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    UserListComponent,
    UserCreateComponent,
    AdminSidebarHeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    googleMapsCore
  ],
  providers: [AuthGuard, AuthenticationService, BlogService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
