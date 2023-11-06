import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  constructor(private router: Router, private crud: CrudHttpService) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.crud.list_new().subscribe(
      (res: any) => {
        const user = res.find((a: any) => a.stdEmail === loginForm.value.t1 && a.stdPass === loginForm.value.t2);
  
        if (user) {
          alert("Logged in Successfully");
          localStorage.setItem('token', 'abcdefghijklmnopqrstuvwxyz');
          this.router.navigate(['list']);
        } else {
          alert("Username or password entered is incorrect.");
          loginForm.reset();
        }
      },
      (error: any) => {
        console.error("Error fetching user data:", error);
        // Handle the error here, e.g., display an error message to the user.
      }
    );
  }
}