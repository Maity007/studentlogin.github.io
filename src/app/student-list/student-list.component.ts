import { Component } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  userList: any =[];
  ID: string = ""; 
  stdId: string= "";
  stdName: string="";
  stdEmail: string= "";
  stdPhone: string= "";
  stdPass: string="";


  constructor(private crudHttpService: CrudHttpService) {}

  ngOnInit(): void {
    this.ShowAllUsers();
    }
   
  ShowAllUsers() {
    this.crudHttpService.slist().subscribe(
      (response: any) => {
        this.userList = response;
      },
      (error) => {
        console.error('Error fetching user list:', error);
        // You can also display an error message to the user
      });
    }

  //delete
  delete_user(id: any) {
    this.crudHttpService.delete(id).subscribe(
      (response) => {
        this.ShowAllUsers();
      },
      (error) => {}
    );
  }

}
