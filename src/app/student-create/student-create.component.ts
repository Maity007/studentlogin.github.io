import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent {

constructor(private crudHttpService: CrudHttpService){}

Add(studentAddForm: NgForm)
  {
    let user_data = { stdId:studentAddForm.value.c1, stdName:studentAddForm.value.c2, stdEmail:studentAddForm.value.c3, stdPhone:studentAddForm.value.c4, stdPass:studentAddForm.value.c5 };
    this.crudHttpService.create(user_data).subscribe((response: any)=>
      { console.log(response) },((error: any)=>{ }));

    studentAddForm.reset();
    alert("Register successfully");
    window.location.href="http://localhost:4200/details";
  }
};
