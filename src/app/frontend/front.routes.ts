// Modules
import { Routes, RouterModule } from '@angular/router';

// pages
import { FrontComponent } from './front.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
];

export const FrontRouting = RouterModule.forRoot(appRoutes);
