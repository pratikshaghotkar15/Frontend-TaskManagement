export class LoginResponse {

    userId:number;
	name:string;
    validLogin:boolean

    constructor(a:number,b:string,c:boolean){
        this.userId=a;
        this.name=b;
        this.validLogin=c;
    }
}
