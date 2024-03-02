export class RegisterForm {

    name:string;
    email:string;
    pwd:string;
    phno:string;
    gender:string;
    dob:Date

    constructor(a:string, b:string, c:string, d:string,e:string,f:Date){
        this.name=a;
        this.email=b;
        this.pwd=c;
        this.phno=d;
        this.gender=e;
        this.dob=f;
    }
}
