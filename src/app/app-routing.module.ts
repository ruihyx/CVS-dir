import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ContactSuccessComponent } from './components/contact-success/contact-success.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/directory', pathMatch: 'full' },
  { path: 'directory', component: DirectoryComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'contactsuccess', component: ContactSuccessComponent },
  { path: 'about', component: AboutComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
