import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/create', pathMatch:'full'},
  { path: 'create', component: StudentCreateComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'login', component: StudentLoginComponent},
  { path: 'create', component: StudentCreateComponent},
  { path: 'details', component: StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

