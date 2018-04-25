// Modules
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from './_guards/auth.guard';

// Frontend layout Components
import { FrontComponent } from './frontend/front.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { BlogComponent } from './frontend/blog/blog.component';
import { LoginComponent } from './frontend/login/login.component';
import { RegisterComponent } from './frontend/register/register.component';
import { ContactComponent } from './frontend/contact/contact.component';

// Admin Backend Components
import { BackendComponent } from './backend/backend.component';
import { AdminLoginComponent } from './backend/login/login.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { UserListComponent } from './backend/users/list/userlist.component';
import { UserCreateComponent } from './backend/users/create/usercreate.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FrontComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
    {
        path: 'about',
        component: FrontComponent,
        children: [
            { path: '', component: AboutComponent }
        ]
    },
    {
        path: 'blog',
        component: FrontComponent,
        children: [
            { path: '', component: BlogComponent }
        ]
    },
    {
        path: 'login',
        component: FrontComponent,
        children: [
            { path: '', component: LoginComponent }
        ]
    },
    {
        path: 'register',
        component: FrontComponent,
        children: [
            { path: '', component: RegisterComponent }
        ]
    },
    {
        path: 'contact',
        component: FrontComponent,
        children: [
            { path: '', component: ContactComponent }
        ]
    },
    {
        path: 'admin',
        component: AdminLoginComponent,
        canActivate: [AuthGuard],
    },
    { path: 'admin/login', component: AdminLoginComponent },
    {
        path: 'admin/dashboard',
        component: BackendComponent,
        children: [
            { path: '', component: DashboardComponent }
        ],
        canActivate: [AuthGuard],
    },
    {
        path: 'admin/users',
        component: BackendComponent,
        children: [
            { path: '', component: UserListComponent }
        ],
        canActivate: [AuthGuard],
    },
    {
        path: 'admin/users/create',
        component: BackendComponent,
        children: [
            { path: '', component: UserCreateComponent }
        ],
        canActivate: [AuthGuard],
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes
    // { enableTracing: true } // <-- debugging purposes only
);
