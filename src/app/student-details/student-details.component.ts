import { Component } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  userList: any = [];
  ID: string = '';
  stdId: string = '';
  stdName: string = '';
  stdEmail: string = '';
  stdPhone: string = '';
  stdPass: string = '';

  display1 = true;
  display = false;
  display2 = false;
  index: any;

  constructor(
    private crudHttpService: CrudHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    this.crudHttpService.slist().subscribe(
      (response) => {
        this.userList = response;
      },
      (error) => {
        // Handle errors here, e.g., display an error message
      }
    );
  }

  fetchStudentDetails(useredit: NgForm) {
    this.index = this.userList.findIndex(
      (x: any) =>
        x.stdEmail === useredit.value.studcode &&
        x.stdPass === useredit.value.studpass
    );

    if (this.index === 0) {
      this.display = true;
      this.display1 = false;
      alert("Logged in Successfully");
      localStorage.setItem('token', 'abcdefghijklmnopqrstuvwxyz');
    } else {
      this.display = false;
      alert('Student details for the student Id do not exist');
    }

    // Reset the form and navigate to 'list' route after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      useredit.reset();
      this.display1 = true;
      this.display = false;
      this.display2 = false;
    }, 200000);
  }

  Edit(data: any) {
    const user_data = {
      stdId: data.c1,
      stdName: data.c2,
      stdEmail: data.c3,
      stdPhone: data.c4,
      stdPass: data.c5,
    };

    this.crudHttpService.Update(this.ID, user_data).subscribe(
      (response) => {
        this.fetchDetails();
      },
      (error) => {
        // Handle errors here, e.g., display an error message
      }
    );

    this.display2 = false;
  }

  sendtoUpdate(user_data: any) {
    this.display2 = true;

    this.ID = user_data.id;
    this.stdId = user_data.stdId;
    this.stdName = user_data.stdName;
    this.stdEmail = user_data.stdEmail;
    this.stdPhone = user_data.stdPhone;
    this.stdPass = user_data.stdPass;
  }

  logout(){
    var a= confirm("Do you want to Logout?");
    if( a==true){
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
  
}
