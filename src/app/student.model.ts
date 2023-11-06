export class student{
    id:number;
    name:string;
    email:string;
    phone:number;
    pass:string;

    constructor(id:number,name:string,email:string,phone:number,pass:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.pass = pass;
    }
}